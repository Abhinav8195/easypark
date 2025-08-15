export const createAccount =()=>{

    let accountData = {};

        // Initialize animations
        setTimeout(() => {
            document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate');
                }, index * 200);
            });
        }, 300);

        // Form input animations with staggered delays
        document.querySelectorAll('.form-input').forEach((input, index) => {
            // Add staggered animation delay
            input.parentElement.style.animationDelay = `${index * 0.1}s`;
            
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02) translateY(-2px)';
                this.style.borderColor = 'var(--light-gray)';
                
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: rgba(209, 208, 208, 0.1);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                this.parentElement.style.position = 'relative';
                this.parentElement.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1) translateY(0)';
                if (!this.value) {
                    this.style.borderColor = 'rgba(152, 134, 134, 0.2)';
                }
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearValidation(this);
            });
        });
        
        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Form validation functions
        function validateField(input) {
            const value = input.value.trim();
            const fieldName = input.id;
            let isValid = true;
            let message = '';

            switch (fieldName) {
                case 'orderId':
                    if (!value) {
                        isValid = false;
                        message = 'Order ID is required';
                    } else if (!/^EP\d{7}$/.test(value)) {
                        isValid = false;
                        message = 'Invalid Order ID format (e.g., EP2024001)';
                    } else {
                        message = 'Order ID verified ✓';
                    }
                    break;
                    
                case 'stickerId':
                    if (!value) {
                        isValid = false;
                        message = 'Sticker ID is required';
                    } else if (!/^ST\d{6}$/.test(value)) {
                        isValid = false;
                        message = 'Invalid Sticker ID format (e.g., ST123456)';
                    } else {
                        message = 'Sticker ID verified ✓';
                    }
                    break;
                    
                case 'firstName':
                case 'lastName':
                    if (!value) {
                        isValid = false;
                        message = `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`;
                    } else if (value.length < 2) {
                        isValid = false;
                        message = 'Name must be at least 2 characters';
                    } else {
                        message = 'Looks good ✓';
                    }
                    break;
                    
                case 'vehicleNo':
                    if (!value) {
                        isValid = false;
                        message = 'Vehicle number is required';
                    } else if (!/^[A-Z]{2}\s?\d{2}\s?[A-Z]{1,2}\s?\d{4}$/i.test(value)) {
                        isValid = false;
                        message = 'Invalid format (e.g., MH 01 AB 1234)';
                    } else {
                        message = 'Vehicle number verified ✓';
                    }
                    break;
                    
                case 'phoneNumber':
                    const phoneRegex = /^\+91\s?\d{5}\s?\d{5}$/;
                    if (!value) {
                        isValid = false;
                        message = 'Phone number is required';
                    } else if (!phoneRegex.test(value)) {
                        isValid = false;
                        message = 'Invalid phone number format';
                    } else {
                        message = 'Phone number verified ✓';
                    }
                    break;
                    
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!value) {
                        isValid = false;
                        message = 'Email address is required';
                    } else if (!emailRegex.test(value)) {
                        isValid = false;
                        message = 'Invalid email address format';
                    } else {
                        message = 'Email verified ✓';
                    }
                    break;
            }

            showValidation(input, isValid, message);
            return isValid;
        }

        function showValidation(input, isValid, message) {
            const messageEl = document.getElementById(input.id + 'Message');
            
            input.classList.remove('error', 'success');
            messageEl.classList.remove('show', 'error', 'success');
            
            if (message) {
                messageEl.textContent = message;
                messageEl.classList.add('show', isValid ? 'success' : 'error');
                input.classList.add(isValid ? 'success' : 'error');
            }
        }

        function clearValidation(input) {
            const messageEl = document.getElementById(input.id + 'Message');
            input.classList.remove('error', 'success');
            messageEl.classList.remove('show', 'error', 'success');
        }

        // Auto-format inputs
        document.getElementById('orderId').addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase().replace(/[^EP0-9]/g, '');
            if (!value.startsWith('EP')) {
                value = 'EP' + value.replace('EP', '');
            }
            if (value.length > 9) value = value.slice(0, 9);
            e.target.value = value;
        });

        document.getElementById('stickerId').addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase().replace(/[^ST0-9]/g, '');
            if (!value.startsWith('ST')) {
                value = 'ST' + value.replace('ST', '');
            }
            if (value.length > 8) value = value.slice(0, 8);
            e.target.value = value;
        });

        document.getElementById('vehicleNo').addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase().replace(/[^A-Z0-9\s]/g, '');
            e.target.value = value;
        });

        document.getElementById('phoneNumber').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 5) {
                value = value.slice(0, 5) + ' ' + value.slice(5);
            }
            if (value.length > 0) {
                value = '+91 ' + value;
            }
            e.target.value = value;
        });

        // Form submission
        document.getElementById('createAccountForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            const inputs = this.querySelectorAll('.form-input');
            let allValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    allValid = false;
                }
            });
            
            if (!allValid) {
                // Scroll to first error
                const firstError = this.querySelector('.form-input.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
                return;
            }
            
            // Collect form data
            accountData = {
                orderId: document.getElementById('orderId').value,
                stickerId: document.getElementById('stickerId').value,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                vehicleNo: document.getElementById('vehicleNo').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                email: document.getElementById('email').value,
                createdAt: new Date().toISOString()
            };
            
            // Simulate account creation
            createAccount();
        });

        function createAccount() {
            // Show loading state
            const submitBtn = document.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Creating Account...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Generate account ID
                const accountId = '#ACC' + new Date().getFullYear() + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
                
                // Update success screen
                document.getElementById('accountId').textContent = accountId;
                document.getElementById('displayVehicle').textContent = accountData.vehicleNo;
                document.getElementById('createdDate').textContent = new Date().toLocaleDateString();
                
                // Hide form and show success
                document.getElementById('account-form').style.display = 'none';
                document.getElementById('success-animation').style.display = 'block';
                
                // Scroll to success message
                document.getElementById('success-animation').scrollIntoView({ behavior: 'smooth' });
                
                console.log('Account created:', accountData);
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }

        function downloadApp() {
            // Simulate app download
            alert('Redirecting to app store...\n\nDownload the EasyPark app to manage your parking profile and receive notifications.');
        }

        function viewProfile() {
            // Simulate profile view
            alert('Profile created successfully!\n\nYou can now use your QR sticker for smart parking communication.');
        }
   
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96facce690ba54c0',t:'MTc1NTI4MzAxNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
}