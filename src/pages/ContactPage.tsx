import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    homeSize: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
    
    // Check if Web3Forms is configured
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!web3FormsKey || web3FormsKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setError('Contact form is not configured yet. Please email us directly at hello@solarnaija.com');
      return;
    }
    
    // Prevent duplicate submissions
    if (submitting) return;
    
    setSubmitting(true);

    try {
      // Trim and prepare form data
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        homeSize: formData.homeSize.trim(),
        budget: formData.budget.trim(),
      };
      
      // Validate required fields
      if (!trimmedData.name || !trimmedData.email || !trimmedData.subject || !trimmedData.message) {
        setError('Please fill in all required fields');
        setSubmitting(false);
        return;
      }
      
      // Build message body
      let messageBody = trimmedData.message;
      if (trimmedData.homeSize || trimmedData.budget) {
        messageBody += '\n\n---\n';
        if (trimmedData.homeSize) messageBody += `Home/Business Size: ${trimmedData.homeSize}\n`;
        if (trimmedData.budget) messageBody += `Budget Range: ${trimmedData.budget}\n`;
      }
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: trimmedData.name,
          email: trimmedData.email,
          subject: `SolarNaija Contact: ${trimmedData.subject}`,
          message: messageBody,
          from_name: 'SolarNaija Website',
        }),
      });

      // Parse response
      let responseData;
      try {
        responseData = await response.json();
      } catch {
        throw new Error('Invalid response from server');
      }

      // Check if submission was successful
      if (response.ok && responseData.success) {
        setSubmitted(true);
      } else {
        // API returned an error
        const errorMessage = responseData.message || 'Failed to send message';
        setError(`${errorMessage}. Please try again or email us at hello@solarnaija.com`);
      }
    } catch (err) {
      // Network or unexpected error
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      
      if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')) {
        setError('Network error. Please check your connection and try again, or email us at hello@solarnaija.com');
      } else {
        setError(`Error: ${errorMessage}. Please try again or email us at hello@solarnaija.com`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <Helmet>
          <title>Message Sent — SolarNaija</title>
        </Helmet>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Message Sent!</h1>
        <p className="text-gray-600 mt-2">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Contact Us — SolarNaija</title>
        <meta name="description" content="Ask us about solar inverters, batteries, panels, and complete solar kits for Nigerian homes. Get personalized recommendations." />
      </Helmet>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-solar-500" />
          Ask Us a Question
        </h1>
        <p className="text-gray-600 mt-2">
          Not sure which solar setup you need? Have a question about a product? Send us a message and we'll help you out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    placeholder="e.g. Chidi Okonkwo"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                  aria-required="true"
                >
                  <option value="">Select a topic...</option>
                  <option value="recommendation">I need a solar recommendation</option>
                  <option value="product-question">Question about a specific product</option>
                  <option value="price">Price inquiry</option>
                  <option value="review-request">Request a product review</option>
                  <option value="correction">Report an error or correction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {formData.subject === 'recommendation' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-solar-50 rounded-lg border border-solar-200">
                  <div>
                    <label htmlFor="contact-home-size" className="block text-sm font-medium text-gray-700 mb-1">
                      Home/Business Size
                    </label>
                    <select
                      id="contact-home-size"
                      value={formData.homeSize}
                      onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="self-contain">Self-contain / Room</option>
                      <option value="1-bedroom">1 Bedroom Flat</option>
                      <option value="2-bedroom">2 Bedroom Flat</option>
                      <option value="3-bedroom">3 Bedroom Flat</option>
                      <option value="4-bedroom">4+ Bedroom / Duplex</option>
                      <option value="shop">Shop / Small Business</option>
                      <option value="office">Office</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="under-500k">Under ₦500,000</option>
                      <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                      <option value="1m-2m">₦1,000,000 - ₦2,000,000</option>
                      <option value="2m-plus">₦2,000,000+</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  minLength={10}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none resize-none"
                  placeholder="Tell us about your power needs, what appliances you want to run, your location, etc."
                  aria-required="true"
                  aria-describedby="message-hint"
                />
                <p id="message-hint" className="text-xs text-gray-500 mt-1">
                  Minimum 10 characters, maximum 2000 characters
                </p>
              </div>

              {error && (
                <div 
                  className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-600 disabled:bg-solar-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                aria-busy={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-5 bg-white rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-solar-500" />
                Email Us Directly
              </h3>
              <p className="text-sm text-gray-600 mt-2">hello@solarnaija.com</p>
              <p className="text-xs text-gray-500 mt-1">We respond within 24-48 hours</p>
            </div>

            <div className="p-5 bg-solar-50 rounded-xl border border-solar-200">
              <h3 className="font-bold text-solar-800">Quick Tip</h3>
              <p className="text-sm text-solar-900 mt-2">
                For faster help, include: your location, home size, appliances you want to power, and your budget range.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900">Common Questions</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• How much solar for a 3-bedroom flat?</li>
                <li>• Best inverter for my budget?</li>
                <li>• Do I need panels or just inverter?</li>
                <li>• How long does installation take?</li>
              </ul>
              <Link to="/guides" className="text-solar-600 hover:underline text-sm font-medium mt-3 inline-block">
                Check our guides →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
