import { X, Send, Bot } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    companySize: "",
    businessNature: "",
    workflowIdea: "",
    outcomes: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/qfatima504@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New AigenStack Process Request from ${formData.firstName} ${formData.lastName}`,
            FirstName: formData.firstName,
            LastName: formData.lastName,
            Email: formData.email,
            Website: formData.website,
            CompanySize: formData.companySize,
            BusinessNature: formData.businessNature,
            AIWorkflowIdea: formData.workflowIdea,
            DesiredOutcomes: formData.outcomes,
            Budget: formData.budget,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // reset + close after short delay
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 1800);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        companySize: "",
        businessNature: "",
        workflowIdea: "",
        outcomes: "",
        budget: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Dark overlay (no blur → better performance) */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-cyan-500/20 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 border-b border-cyan-500/20 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-7 h-7 text-cyan-400" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  Start Your AI Automation Journey
                </h2>
                <p className="text-sm text-gray-400">
                  Fill out the form below and we'll review your application
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/5 transition"
            >
              <X className="w-6 h-6 text-gray-300 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
              <Send className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-400">
              We’ve received your application and will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* FormSubmit options don't apply to JSON body, so no hidden inputs needed here */}

            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                label="First Name *"
                value={formData.firstName}
                onChange={(v) => setFormData({ ...formData, firstName: v })}
                placeholder="John"
                required
              />
              <InputField
                label="Last Name *"
                value={formData.lastName}
                onChange={(v) => setFormData({ ...formData, lastName: v })}
                placeholder="Doe"
                required
              />
            </div>

            <InputField
              label="Email *"
              type="email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              placeholder="john@company.com"
              required
            />

            <InputField
              label="Website"
              value={formData.website}
              onChange={(v) => setFormData({ ...formData, website: v })}
              placeholder="https://yourwebsite.com"
            />

            <SelectField
              label="Company Size *"
              value={formData.companySize}
              onChange={(v) => setFormData({ ...formData, companySize: v })}
              options={["1-10", "11-50", "51-200", "200+"]}
              required
            />

            <InputField
              label="Nature of Business *"
              value={formData.businessNature}
              onChange={(v) => setFormData({ ...formData, businessNature: v })}
              placeholder="SaaS, Agency, E-commerce..."
              required
            />

            <TextAreaField
              label="AI Workflow Idea *"
              value={formData.workflowIdea}
              onChange={(v) => setFormData({ ...formData, workflowIdea: v })}
              placeholder="Describe what you want to automate..."
              required
            />

            <TextAreaField
              label="Desired Outcomes *"
              value={formData.outcomes}
              onChange={(v) => setFormData({ ...formData, outcomes: v })}
              placeholder="What results are you hoping to achieve?"
              required
            />

            <SelectField
              label="Budget *"
              value={formData.budget}
              onChange={(v) => setFormData({ ...formData, budget: v })}
              options={["<$5k", "$5k-$10k", "$10k-$25k", "$25k+"]}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------- Reusable Field Components ---------- */

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 transition"
        placeholder={placeholder}
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-xl text-white focus:border-cyan-500 transition"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}


function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required,
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        required={required}
        value={value}
        rows={3}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 resize-none focus:border-cyan-500 transition"
        placeholder={placeholder}
      />
    </div>
  );
}
