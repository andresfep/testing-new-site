import { Footer } from "./Footer";
import { SITE } from "./site";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow container mx-auto px-4 pb-16 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">
          {SITE.businessName}
        </h1>
        <p className="mb-8 font-semibold">Effective Date: Jan 1st, 2026</p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          Welcome to {SITE.businessName}
        </h2>
        <p className="mb-6">
          This Privacy Policy outlines our practices regarding the collection,
          use, and disclosure of personal information through our website. By
          utilizing our Site, you agree to the terms outlined in this policy.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-heading font-bold mb-3">
            IMPORTANT NOTICE REGARDING TEXT MESSAGING
          </h3>
          <p>
            {SITE.businessName} ("we," "us," or "our") DOES NOT share customer
            opt-in information, including phone numbers and consent records,
            with any affiliates or third parties for marketing, promotional, or
            any other purposes unrelated to providing our direct services. All
            text messaging originator opt-in data is kept strictly confidential.
          </p>
        </div>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-2 font-semibold">
          We collect the following types of information:
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Personal Information:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Name, email address, phone number, physical address</li>
          <li>
            Payment information when you make a purchase or request a quote
          </li>
          <li>
            Opt-in records and timestamps for all communication channels (SMS,
            email, etc.)
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">
          Non-Personal Information:
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>IP address, browser type, device information</li>
          <li>Website usage patterns and analytics</li>
          <li>Cookies and similar technologies</li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Customer Communication:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Records of inquiries and service requests</li>
          <li>Appointment details and preferences</li>
          <li>Service history and feedback</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-2">We use collected data for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Providing and improving our services</li>
          <li>Processing transactions and payments</li>
          <li>
            Communicating with you about your inquiries, appointments, and
            promotions
          </li>
          <li>Enhancing website functionality and user experience</li>
          <li>Ensuring security and fraud prevention</li>
          <li>
            Maintaining records of your communication preferences and consent
          </li>
        </ul>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          3. SMS Messaging & Compliance
        </h2>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Text Message Program Terms & Conditions
        </h3>
        <p className="mb-4">
          By opting into our SMS messaging services, you agree to receive text
          messages related to our services, including appointment reminders,
          customer support, and important updates.
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Opt-In & Consent:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            You will only receive messages if you have explicitly opted in
          </li>
          <li>We maintain timestamped records of all opt-in actions</li>
          <li>
            We comply with the Telephone Consumer Protection Act (TCPA) and all
            applicable laws
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Opt-Out Instructions:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            You can cancel SMS notifications at any time by replying "STOP"
          </li>
          <li>
            You will receive a final confirmation message, and no further
            messages will be sent unless you re-opt in
          </li>
          <li>All opt-out requests are processed immediately.</li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">
          Message Frequency & Content:
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            Message frequency varies based on your interactions with our
            business
          </li>
          <li>
            Messages will be directly related to the services you have requested
          </li>
          <li>We do not send promotional content without specific consent</li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Help & Support:</h3>
        <p className="mb-4">
          Reply "HELP" for assistance or contact us at {SITE.email}. Customer
          support is available during regular business hours.
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Carrier Information:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Standard message and data rates may apply</li>
          <li>Carriers are not liable for delayed or undelivered messages</li>
          <li>
            Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most
            regional carriers
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">
          SMS Data Protection Statement
        </h3>
        <p className="mb-4">
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors
          in support services, such as customer service is permitted. All other
          use case categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </p>
        <p className="mb-6">
          We implement strict data protection measures to safeguard your SMS
          opt-in information and consent records.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          4. Information Sharing & Disclosure
        </h2>
        <p className="mb-2">
          We do not sell, rent, or trade personal information. We may share
          information with:
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Service Providers:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            Third-party vendors who assist in our operations (e.g., payment
            processing, appointment scheduling)
          </li>
          <li>
            SMS aggregators and providers solely for the purpose of delivering
            messages you've consented to receive
          </li>
          <li>
            All service providers are contractually obligated to maintain
            confidentiality and security
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Legal Compliance:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>If required by law, legal process, or to protect our rights</li>
          <li>In response to valid law enforcement requests or court orders</li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Business Transfers:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>In case of mergers, acquisitions, or sale of assets</li>
          <li>
            In such cases, your data remains protected under the terms of this
            policy
          </li>
        </ul>
        <p className="mb-6">
          All the above categories exclude text messaging originator opt-in data
          and consent; this information will not be shared with any third
          parties, excluding aggregators and providers of the Text Message
          services.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          5. Data Security
        </h2>
        <p className="mb-2">
          We implement and maintain reasonable security measures to protect your
          personal information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Secure access controls and authentication mechanisms</li>
          <li>Regular security assessments and updates</li>
          <li>Employee training on data protection</li>
          <li>
            Breach notification protocols in accordance with applicable laws
          </li>
          <li>Secure backup systems and disaster recovery procedures</li>
        </ul>
        <p className="mb-6">
          Despite these measures, no method of transmission over the Internet or
          electronic storage is 100% secure. We strive to use commercially
          acceptable means to protect your personal information but cannot
          guarantee absolute security.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          6. Cookies & Tracking Technologies
        </h2>
        <p className="mb-2">We use cookies and similar technologies to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Analyze site traffic and user behavior</li>
          <li>Remember your preferences</li>
          <li>Improve website functionality and user experience</li>
          <li>Measure the effectiveness of our services</li>
        </ul>
        <p className="mb-6">
          You may control cookies through your browser settings. Disabling
          cookies may limit your ability to use certain features of our website.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          7. Your Rights & Choices
        </h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Access, update, or delete your personal information</li>
          <li>
            Opt-out of marketing emails by clicking "unsubscribe" in our emails
          </li>
          <li>Opt-out of SMS messages by replying "STOP"</li>
          <li>Request information on how we process your data</li>
          <li>Withdraw consent at any time for future communications</li>
          <li>
            Lodge a complaint with a supervisory authority if you believe your
            rights have been violated
          </li>
        </ul>
        <p className="mb-6">
          To exercise these rights, please contact us using the information in
          Section 10.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          8. Third-Party Links
        </h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices and encourage you to review
          their policies. This privacy policy applies only to information
          collected by {SITE.businessName}.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this policy periodically. The latest version will always
          be available on our website with the effective date. For significant
          changes, we will notify you by email or through a notice on our
          website.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          10. Contact Us
        </h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or how your
          information is handled, contact us at:
        </p>
        <p className="mb-1 font-bold">{SITE.businessName}</p>
        <p className="mb-1">
          <strong>Phone:</strong>{" "}
          <a href={SITE.phoneHref} className="text-primary hover:underline">
            {SITE.phone}
          </a>
        </p>
        <p className="mb-1">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-primary hover:underline"
          >
            {SITE.email}
          </a>
        </p>
        <p className="mb-6">
          <strong>Address:</strong> {SITE.street}, {SITE.streetCity}
        </p>

        <p className="font-semibold mt-12 border-t pt-8">
          By using our website and services, you consent to this Privacy Policy.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
