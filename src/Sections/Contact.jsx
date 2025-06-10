import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../Components/Alert";
import { Particles } from "../Components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send("service_3z6tivl","template_m51erbf", {from_name:formData.name,to_name:"Abdul Rauf",from_email:formData.email,message:formData.msg},"9a0Weh4Kea-w7SjmB" );
      setIsLoading(false);
      showAlertMessage("success", "You message has been sent!");
      setFormData({
        name: "",
        email: "",
        msg: "",
      });
    } catch (e) {
      setIsLoading(false);
      console.error("Failed to send message:", e);
      showAlertMessage("danger", "Somthing went wrong!");
    }
    // service_3z6tivl
    //template_m51erbf
   
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
       className="absolute inset-0 -z-50"
        quantity={150}
        ease={80}
        color={"#ffffff"}
        refresh/>
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your exiting
            platform, or bring a unique project to life, I'm here to help{" "}
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Enter Your Full Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Enter Your E-mail Address"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="msg" className="field-label">
              Full Name
            </label>
            <textarea
              id="msg"
              name="msg"
              type="text"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share Your Thoughts..."
              autoComplete="msg"
              value={formData.msg}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
