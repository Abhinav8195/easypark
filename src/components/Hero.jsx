    import React from 'react';

    const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative grid-bg ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-10 lg:mt-0">
            <div>
                        <div className="fade-in">
                            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                                <span className="text-white">Parking</span><br/>
                                <span className="text-gradient">Reimagined</span>
                            </h1>
                        </div>
                        
                        <div className="fade-in">
                            <p
  className="text-xl mb-10 leading-relaxed max-w-lg"
  style={{ color: 'var(--medium-gray)' }}
>
                                Connect instantly with car owners through smart QR technology. 
                                Experience the future of parking communication.
                            </p>
                        </div>
                        
                        <div className="fade-in flex flex-col sm:flex-row gap-6">
                            <button className="btn-modern flex items-center justify-center">
                                <span className="mr-3">→</span>
                                Scan & Create Profile
                            </button>
                            <button className="btn-outline">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                

            <div className="relative">
                <div className="floating card-modern max-w-sm mx-auto">
                <div className="text-center">
                    <div className="qr-container mx-auto mb-6 w-48">
                    <svg className="w-full h-48" viewBox="0 0 200 200">
                        {/* Modern Minimalist QR Code */}
                        <rect x="20" y="20" width="160" height="160" fill="none" stroke="#000" strokeWidth="2" rx="8" />

                        {/* Corner squares */}
                        <rect x="30" y="30" width="30" height="30" fill="#000" rx="4" />
                        <rect x="140" y="30" width="30" height="30" fill="#000" rx="4" />
                        <rect x="30" y="140" width="30" height="30" fill="#000" rx="4" />

                        {/* Data pattern */}
                        <rect x="80" y="40" width="8" height="8" fill="#000" rx="1" />
                        <rect x="100" y="40" width="8" height="8" fill="#000" rx="1" />
                        <rect x="120" y="40" width="8" height="8" fill="#000" rx="1" />

                        <rect x="70" y="60" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="90" y="60" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="110" y="60" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="130" y="60" width="8" height="8" fill="#5C4E4E" rx="1" />

                        <rect x="80" y="80" width="8" height="8" fill="#000" rx="1" />
                        <rect x="120" y="80" width="8" height="8" fill="#000" rx="1" />

                        <rect x="70" y="100" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="90" y="100" width="8" height="8" fill="#000" rx="1" />
                        <rect x="110" y="100" width="8" height="8" fill="#000" rx="1" />
                        <rect x="130" y="100" width="8" height="8" fill="#5C4E4E" rx="1" />

                        <rect x="80" y="120" width="8" height="8" fill="#000" rx="1" />
                        <rect x="100" y="120" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="120" y="120" width="8" height="8" fill="#000" rx="1" />

                        <rect x="70" y="140" width="8" height="8" fill="#000" rx="1" />
                        <rect x="110" y="140" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="130" y="140" width="8" height="8" fill="#000" rx="1" />

                        <rect x="80" y="160" width="8" height="8" fill="#5C4E4E" rx="1" />
                        <rect x="100" y="160" width="8" height="8" fill="#000" rx="1" />
                        <rect x="120" y="160" width="8" height="8" fill="#5C4E4E" rx="1" />
                    </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">Smart QR Sticker</h3>
                    <p style={{ color: 'var(--medium-gray)' }}>Instant connection technology</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Hero;
