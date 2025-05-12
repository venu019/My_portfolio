import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { user_name, user_email, subject, message } = formData;

    emailjs.send(
      'service_haobqxf',   // Your Service ID
      'template_1wyaxqm',  // Your Template ID
      {
        name :user_name,
        email :user_email,
        subject,
        message,
      },
      'XJoo9uMbKfeKT01EA' // Your Public Key
    )
      .then(() => {
        toast.error('Message sent successfully!');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        form.current?.reset();  // Optional: reset native form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('There was an error sending your message.');
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="user_name" className="block text-gray-700 mb-2">
          Your Name
        </label>
        <Input
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-gray-700 mb-2">
          Your Email
        </label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Your Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Hello, I'd like to discuss..."
          required
          className="w-full h-32"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-portfolio-dark-blue text-white hover:bg-white hover:text-portfolio-dark-blue transition-colors duration-300 p-2 rounded-lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
