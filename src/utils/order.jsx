export const initorder = () => {
    let currentStep = 1;
    let selectedPackage = null;
    let orderData = {};

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Exit early if essential DOM elements are not found
    if (!nextBtn || !prevBtn) {
        console.warn('Order initialization skipped — required DOM not found yet.');
        return;
    }

    // Initialize animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 200);
        });
    }, 300);

    // Package selection
    document.querySelectorAll('.package-card').forEach((card) => {
        card.addEventListener('mouseenter', function () {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(152, 134, 134, 0.2)';
            }
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            }
        });

        card.addEventListener('click', function () {
            document.querySelectorAll('.package-card').forEach(c => {
                c.classList.remove('selected');
                c.style.transform = 'translateY(0) scale(1)';
            });

            this.classList.add('selected');

            const burst = document.createElement('div');
            burst.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(209, 208, 208, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: selectionBurst 0.8s ease-out;
                pointer-events: none;
                z-index: 10;
            `;

            this.style.position = 'relative';
            this.appendChild(burst);
            setTimeout(() => burst.remove(), 800);

            selectedPackage = {
                name: this.dataset.package,
                price: parseInt(this.dataset.price),
                stickers: parseInt(this.dataset.stickers),
                displayName: this.querySelector('h4').textContent,
                description: `${this.dataset.stickers} Premium QR Sticker${this.dataset.stickers > 1 ? 's' : ''}`
            };

            updateOrderSummary();
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            nextBtn.style.transform = 'scale(1.05)';
            setTimeout(() => { nextBtn.style.transform = 'scale(1)'; }, 200);
        });
    });

    // Burst animation CSS
    const burstStyle = document.createElement('style');
    burstStyle.textContent = `
        @keyframes selectionBurst {
            0% { width: 0; height: 0; opacity: 1; }
            50% { width: 200px; height: 200px; opacity: 0.8; }
            100% { width: 300px; height: 300px; opacity: 0; }
        }
    `;
    document.head.appendChild(burstStyle);

    // Navigation buttons
    nextBtn.addEventListener('click', function () {
        if (currentStep === 1 && !selectedPackage) {
            alert('Please select a package first');
            return;
        }
        if (currentStep === 2 && !validatePersonalInfo()) return;
        if (currentStep === 3 && !validateShippingInfo()) return;

        if (currentStep < 3) {
            currentStep++;
            updateStep();
        } else {
            placeOrder();
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentStep > 1) {
            currentStep--;
            updateStep();
        }
    });

    function updateStep() {
    const sections = ['package-selection', 'personal-info', 'shipping-info', 'billing-info'];
    sections.forEach(id => document.getElementById(id).style.display = 'none');

    // Update progress bar
    for (let i = 1; i <= 3; i++) {
        const stepNum = document.getElementById(`step${i}`);
        const stepText = document.getElementById(`step${i}-text`);
        if (stepNum && stepText) {
            if (i <= currentStep) {
                stepNum.classList.add('active');
                stepText.classList.add('active');
            } else {
                stepNum.classList.remove('active');
                stepText.classList.remove('active');
            }
        }
    }

    let activeSectionId = '';
    if (currentStep === 1) {
        activeSectionId = 'package-selection';
        prevBtn.style.display = 'none';
        nextBtn.textContent = 'Continue →';
    } else if (currentStep === 2) {
        activeSectionId = 'personal-info';
        prevBtn.style.display = 'inline-block';
        nextBtn.textContent = 'Continue →';
    } else if (currentStep === 3) {
        activeSectionId = 'shipping-info';
        if (!document.getElementById('sameAsShipping').classList.contains('checked')) {
            document.getElementById('billing-info').style.display = 'block';
        }
        prevBtn.style.display = 'inline-block';
        nextBtn.textContent = 'Place Order';
    }

    if (activeSectionId) {
        const el = document.getElementById(activeSectionId);
        el.style.display = 'block';
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


    function updateOrderSummary() {
        if (!selectedPackage) return;

        const packagePrice = selectedPackage.price;
        const shipping = 49;
        const gst = Math.round((packagePrice + shipping) * 0.18);
        const total = packagePrice + shipping + gst;

        document.getElementById('selected-package').style.display = 'block';
        document.getElementById('package-name').textContent = selectedPackage.displayName;
        document.getElementById('package-description').textContent = selectedPackage.description;
        document.getElementById('package-price').textContent = `₹${packagePrice}`;
        document.getElementById('gst-amount').textContent = `₹${gst}`;
        document.getElementById('total-amount').textContent = `₹${total}`;

        const features = {
            basic: [
                '• 1 Premium weather-resistant sticker',
                '• Basic profile setup',
                '• SMS notifications',
                '• Email support'
            ],
            family: [
                '• 5 Premium weather-resistant stickers',
                '• Advanced profile features',
                '• All notification types',
                '• Priority support',
                '• Family sharing features'
            ],
            business: [
                '• 15 Premium weather-resistant stickers',
                '• Business profile features',
                '• All notification types',
                '• 24/7 priority support',
                '• Analytics dashboard'
            ]
        };

        document.getElementById('package-features').innerHTML = features[selectedPackage.name].join('<br>');
    }

    function validatePersonalInfo() {
        const required = ['firstName', 'lastName', 'email', 'phone'];
        for (let field of required) {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                input.focus();
                alert(`Please fill in your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return false;
            }
        }
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email').focus();
            alert('Please enter a valid email address');
            return false;
        }
        return true;
    }

    function validateShippingInfo() {
        const required = ['address1', 'city', 'state', 'pincode'];
        for (let field of required) {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                input.focus();
                alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return false;
            }
        }
        if (!document.getElementById('sameAsShipping').classList.contains('checked')) {
            const billingRequired = ['billingAddress1', 'billingCity', 'billingState', 'billingPincode'];
            for (let field of billingRequired) {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    input.focus();
                    alert(`Please fill in the billing ${field.replace('billing', '').replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                    return false;
                }
            }
        }
        return true;
    }

    function placeOrder() {
        orderData = {
            package: selectedPackage,
            personal: {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            },
            shipping: {
                address1: document.getElementById('address1').value,
                address2: document.getElementById('address2').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                pincode: document.getElementById('pincode').value
            },
            billing: document.getElementById('sameAsShipping').classList.contains('checked') ? 'same' : {
                address1: document.getElementById('billingAddress1').value,
                address2: document.getElementById('billingAddress2').value,
                city: document.getElementById('billingCity').value,
                state: document.getElementById('billingState').value,
                pincode: document.getElementById('billingPincode').value
            }
        };

        const orderId = '#EP' + new Date().getFullYear() + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        document.getElementById('orderId').textContent = orderId;

        document.getElementById('navigation-buttons').style.display = 'none';
        document.querySelectorAll('.form-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('success-animation').style.display = 'block';
        document.getElementById('success-animation').scrollIntoView({ behavior: 'smooth' });

        console.log('Order placed:', orderData);
    }

    document.getElementById('sameAsShipping').addEventListener('click', function () {
        this.classList.toggle('checked');
        const billingSection = document.getElementById('billing-info');
        billingSection.style.display = this.classList.contains('checked') ? 'none' : 'block';
    });

    // Input effects
    document.querySelectorAll('.form-input').forEach((input, index) => {
        input.parentElement.style.animationDelay = `${index * 0.1}s`;
        input.addEventListener('focus', function () {
            this.style.transform = 'scale(1.02) translateY(-2px)';
            this.style.borderColor = 'var(--light-gray)';
        });
        input.addEventListener('blur', function () {
            this.style.transform = 'scale(1) translateY(0)';
            if (!this.value) {
                this.style.borderColor = 'rgba(152, 134, 134, 0.2)';
            }
        });
    });

    document.getElementById('phone').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        if (value.length > 5) value = value.slice(0, 5) + ' ' + value.slice(5);
        if (value.length > 0) value = '+91 ' + value;
        e.target.value = value;
    });

    document.querySelectorAll('#pincode, #billingPincode').forEach(input => {
        input.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 6) value = value.slice(0, 6);
            e.target.value = value;
        });
    });
};
