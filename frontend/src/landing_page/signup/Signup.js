import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Signup submitted!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Left side - Form */}
      <div style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#fff'
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          {/* Logo */}
          <div style={{ marginBottom: '50px' }}>
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
              <text x="0" y="20" fontSize="24" fontWeight="600" fill="#387ed1">ZERODHA</text>
            </svg>
          </div>

          <h1 style={{
            fontSize: '28px',
            fontWeight: '500',
            color: '#333',
            marginBottom: '10px',
            lineHeight: '1.3'
          }}>
            Signup now
          </h1>
          
          <p style={{
            color: '#666',
            fontSize: '15px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Or track your existing application.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 Mobile number"
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#387ed1'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <p style={{
              fontSize: '12px',
              color: '#666',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              You will receive an OTP on your number
            </p>

            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '14px',
                background: '#387ed1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d6ab4'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#387ed1'}
            >
              Continue
            </button>
          </form>

          <div style={{
            marginTop: '30px',
            paddingTop: '30px',
            borderTop: '1px solid #eee'
          }}>
            <a href="#" style={{
              color: '#387ed1',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Want to open an NRI account?
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Image/Info */}
      <div style={{
        flex: '1',
        background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>

        <div style={{
          textAlign: 'center',
          color: 'white',
          zIndex: '1',
          maxWidth: '450px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            margin: '0 auto 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '500',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            Start your investment journey
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Open a free Zerodha account and start investing in stocks, mutual funds, and more with zero brokerage on equity delivery trades.
          </p>

          <div style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px'
          }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '600', marginBottom: '5px' }}>1.5 Cr+</div>
              <div style={{ fontSize: '13px', opacity: '0.8' }}>Active clients</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '600', marginBottom: '5px' }}>₹4.5+ Lakh Cr</div>
              <div style={{ fontSize: '13px', opacity: '0.8' }}>Client assets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;