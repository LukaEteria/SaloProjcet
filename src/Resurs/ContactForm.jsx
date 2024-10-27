import React from 'react';
import './Contacts.css';

const ContactForm = () => {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "091ad239-3ff5-4763-b043-cd0900d0704b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("Form Submitted Successfully, შეტყობინება წარმატებით გაიგზავნა");
      event.target.reset();
    } else {
      console.log("Error, მოხდა შეცდომა", data);
      setResult(data.message);
    }
  };

  return (
    <div className='Contacts_Email'>
      <form className='contact_Forms' onSubmit={onSubmit}>
        <h1 className='Contact_text' >გამოგვიგზავნეთ შეტყობინება და შეიტყვეთ მეტი ჩვენი სერვისების შესახებ</h1>
        <p>Name</p>
        <input className='name input' type="text" name="name" required/>
        <p>Email</p>
        <input className='email input' type="email" name="email" required />
        <p>Your message (optional)</p>
        <textarea className='Text_area input' name="message" required ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? <div className="loading-spinner"></div> : "Submit Form"}
        </button>
      </form>
      {result && <span className="result-message">{result}</span>}
    </div>
  );
};

export default ContactForm;
