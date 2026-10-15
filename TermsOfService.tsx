import { Footer } from "./Footer";
import { SITE } from "./site";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow container mx-auto px-4 pb-16 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">
          Terms of Service
        </h1>
        <p className="mb-8 font-semibold">Program Name: {SITE.businessName}</p>
        <p className="mb-8 font-semibold">Effective Date: Jan 1st, 2026</p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          SMS Messaging Terms & Compliance
        </h2>
        <div className="space-y-4 mb-8">
          <p>
            <strong>1. Program Description:</strong> This messaging program
            sends appointment confirmation and reminder messages to customers
            who have booked an appointment with {SITE.businessName} through our
            website, or via our scheduling forms, and have explicitly opted in
            to receive SMS notifications. Opt-in is collected via web forms with
            a dedicated checkbox for SMS consent. Messages include scheduling
            confirmations, appointment reminders, rescheduling updates, and
            customer support communications.
          </p>
          <p>
            <strong>2. Cancellation Instructions:</strong> You can cancel the
            SMS service at any time. Simply text "STOP" to the same number that
            sent you messages. Upon sending "STOP," we will confirm your
            unsubscribe status via SMS. Following this confirmation, you will no
            longer receive SMS messages from us. To rejoin, sign up as you did
            initially, and we will resume sending SMS messages to you.
          </p>
          <p>
            <strong>3. Support Information:</strong> If you experience issues
            with the messaging program, reply with the keyword "HELP" for more
            assistance, or reach out directly to {SITE.email} or call{" "}
            {SITE.phone} during business hours.
          </p>
          <p>
            <strong>4. Carrier Liability:</strong> Carriers are not liable for
            delayed or undelivered messages.
          </p>
          <p>
            <strong>5. Message & Data Rates:</strong> Message and data rates may
            apply for messages sent to you from us and to us from you. Message
            frequency varies based on your service usage and appointment
            schedule. For questions about your text plan or data plan, contact
            your wireless provider.
          </p>
          <p>
            <strong>6. Supported Carriers:</strong> Our SMS program works with
            all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon,
            Sprint, and most regional carriers.
          </p>
          <p>
            <strong>7. Age Restriction:</strong> You must be 18 years or older
            to participate in our SMS program.
          </p>
          <p>
            <strong>8. Privacy Policy:</strong> For privacy-related inquiries,
            please refer to our Privacy Policy at /privacy
          </p>
        </div>

        <p className="mb-8">
          We comply with all applicable laws and regulations, including the
          Telephone Consumer Protection Act (TCPA) and CTIA guidelines,
          regarding the use of SMS communications.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          General Terms
        </h2>
        <p className="mb-4">
          This website is owned and operated by {SITE.businessName} ("COMPANY,"
          "we" or "us"). By using the Site, you agree to be bound by these Terms
          of Service and to use the Site in accordance with these Terms of
          Service, our Privacy Policy, and any additional terms and conditions
          that may apply to specific sections of the Site or to products and
          services available through the Site or from {SITE.businessName}.
        </p>
        <p className="mb-4">
          Accessing the Site, in any manner, whether automated or otherwise,
          constitutes use of the Site and your agreement to be bound by these
          Terms of Service.
        </p>
        <p className="mb-6">
          We reserve the right to change these Terms of Service or to impose new
          conditions on the use of the Site from time to time, in which case we
          will post the revised Terms of Service on this website. By continuing
          to use the Site after we post any such changes, you accept the Terms
          of Service, as modified.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          Intellectual Property Rights
        </h2>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Our Limited License to You
        </h3>
        <p className="mb-4">
          This Site and all the materials available on the Site are the property
          of {SITE.businessName} and/or our affiliates or licensors and are
          protected by copyright, trademark, and other intellectual property
          laws. The Site is provided solely for your personal non-commercial
          use.
        </p>
        <p className="mb-6">
          You may not use the Site or the materials available on the Site in a
          manner that constitutes an infringement of our rights or that has not
          been authorized by us.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          Disclaimers
        </h2>
        <p className="mb-4">
          Throughout the Site, we may provide links and pointers to Internet
          sites maintained by third parties. Our linking to such third-party
          sites does not imply an endorsement or sponsorship of such sites or
          the information, products, or services offered on or through the
          sites.
        </p>
        <p className="mb-6">
          The information, products, and services offered on or through the Site
          are provided "as is" and without warranties of any kind, either
          express or implied. To the fullest extent permissible pursuant to
          applicable law, we disclaim all warranties, including implied
          warranties of merchantability and fitness for a particular purpose.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          Termination
        </h2>
        <p className="mb-6">
          We reserve the right to terminate or suspend your access to the Site,
          without notice, if we determine that you have violated these Terms of
          Service or engaged in conduct that we deem inappropriate or unlawful.
          Upon termination, you must cease all use of the Site and any content
          obtained from it.
        </p>

        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
          Contact Us
        </h2>
        <p className="mb-4">
          For any questions regarding these Terms of Service, please contact us
          at:
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
          By using our website and services, you consent to these Terms of
          Service.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
