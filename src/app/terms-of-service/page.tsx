import Footer from "../Components/Footer/Footer";
import Link from "next/link";

// Simple header component to avoid GSAP issues
function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Fashion Dreamer AI
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-blue-600 font-medium"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function TermsOfService() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <SimpleHeader />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Back to Home Link */}
            <div className="mb-6">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                ← Back to Home
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Fashion Dreamer – Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 text-center">
                    <strong>Operated by:</strong> Imtiyaz Ltd
                    <br />
                    <strong>Address:</strong> 71-75 Shelton Street, Covent
                    Garden, London, United Kingdom
                    <br />
                    <strong>Email:</strong> saeb@imtiyaz.io
                    <br />
                    <strong>Website:</strong> imtiyaz.io
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  By downloading, installing, or using the Fashion Dreamer
                  mobile application (&quot;App&quot;), you agree to comply with
                  and be bound by these Terms of Service (&quot;Terms&quot;). If
                  you do not agree to these Terms, do not use the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Use of the App
                </h2>
                <p className="text-gray-700 mb-4">
                  Fashion Dreamer allows users to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Upload clothing images,</li>
                  <li>Select AI-generated models and poses,</li>
                  <li>Generate studio-quality fashion photos.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  The App is intended for personal and non-commercial use only.
                  Commercial usage may require prior approval.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. User Responsibilities
                </h2>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>
                    You must be at least 13 years old (or the minimum legal age
                    in your jurisdiction) to use the App.
                  </li>
                  <li>
                    You are responsible for all content you upload and must
                    ensure it does not infringe on third-party rights.
                  </li>
                  <li>
                    You agree not to use the App for any unlawful or prohibited
                    activities.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Account Registration
                </h2>
                <p className="text-gray-700 mb-4">
                  Creating an account may be required to access certain features
                  of the App. You agree to provide accurate and complete
                  information during registration and to update it as necessary.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>
                    All content and materials within the App are owned by
                    Imtiyaz Ltd or its licensors.
                  </li>
                  <li>
                    You are granted a limited, non-exclusive, non-transferable
                    license to use the App for personal purposes.
                  </li>
                  <li>
                    You may not copy, modify, distribute, or create derivative
                    works based on the App without explicit permission.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Privacy Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  Your use of the App is also governed by our Privacy Policy,
                  which outlines how we collect, use, and protect your
                  information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Refund Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  By purchasing a subscription or service within Fashion
                  Dreamer, you acknowledge that your purchase is final and that
                  you are accessing a digital service with immediate
                  availability. Due to the nature of digital content, refunds
                  are not available once access has begun, unless otherwise
                  expressly stated in these Terms or required by applicable law.
                </p>
                <p className="text-gray-700 mb-4">
                  For purchases made through digital distribution platforms such
                  as the Apple App Store or Google Play Store, the refund
                  policies of the respective platforms apply. If you would like
                  to request a refund for such purchases, please contact the
                  relevant store directly.
                </p>
                <p className="text-gray-700 mb-4">
                  If you experience recurring technical difficulties that are
                  solely attributable to our platform (and not due to device
                  compatibility, connectivity, or outdated software), and where
                  required by consumer protection laws, you may be eligible for
                  a discretionary refund. In such cases, you must provide
                  appropriate documentation (e.g., screenshots, error logs)
                  evidencing the issue.
                </p>
                <p className="text-gray-700 mb-4">
                  All refund requests are handled on a case-by-case basis, in
                  accordance with applicable laws and platform policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Termination
                </h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to suspend or terminate your access to
                  the App if you violate these Terms or engage in conduct that
                  we deem harmful to the App or its users.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-4">
                  To the fullest extent permitted by law, Imtiyaz Ltd shall not
                  be liable for any indirect, incidental, special, or
                  consequential damages arising out of your use or inability to
                  use the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Governing Law
                </h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of the United Kingdom.
                  Any disputes will be resolved in the courts of London.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  We may update these Terms from time to time. Any changes will
                  be posted in the App or on our website. Continued use of the
                  App after such changes constitutes acceptance of the new
                  Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  For questions or concerns about these Terms, please contact us
                  at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Imtiyaz Ltd</strong>
                    <br />
                    71-75 Shelton Street, Covent Garden
                    <br />
                    London, United Kingdom
                    <br />
                    <strong>Email:</strong> saeb@imtiyaz.io
                    <br />
                    <strong>Website:</strong> imtiyaz.io
                  </p>
                </div>
              </section>

              <div className="text-center text-gray-500 text-sm mt-8">
                Last Updated: December 2024
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
