import Footer from "../Components/Footer/Footer";

export default function AccountDeletion() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Account Deletion Request
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-red-800 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-red-700">
                      Account deletion is irreversible. Your account and all
                      associated data will be permanently deleted.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Company Information
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Company:</strong> Imtiyaz Ltd
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 71-75 Shelton Street, Covent Garden,
                  London, United Kingdom
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> saeb@imtiyaz.io
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong> imtiyaz.io
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  How to Request Account Deletion
                </h2>
                <p className="text-gray-700 mb-6">
                  To permanently delete your account and all associated personal
                  data, please contact us via email with your request.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-medium text-blue-800 mb-4">
                    Contact Email
                  </h3>
                  <p className="text-blue-700 mb-4">
                    Send your account deletion request to:
                  </p>
                  <div className="bg-white p-4 rounded border border-blue-300 text-center">
                    <p className="text-2xl font-semibold text-blue-900">
                      📧 saeb@imtiyaz.io
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-yellow-800 mb-4">
                    Required Information
                  </h3>
                  <p className="text-yellow-700 mb-3">
                    Please include the following in your email:
                  </p>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                    <li>Your registered account email address</li>
                    <li>Your full name (first and last name)</li>
                    <li>Clear statement requesting account deletion</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  What Will Be Deleted
                </h2>
                <p className="text-gray-700 mb-4">
                  Upon account deletion, the following data will be permanently
                  removed:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Personal account information and profile data</li>
                  <li>All uploaded photos and videos</li>
                  <li>Created AI models and generated content</li>
                  <li>Usage history and app preferences</li>
                  <li>Subscription and billing information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Process Overview
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        Submit Request
                      </h4>
                      <p className="text-gray-600">
                        Email saeb@imtiyaz.io with required information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        Verification
                      </h4>
                      <p className="text-gray-600">
                        We will verify your identity for security purposes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        Account Deletion
                      </h4>
                      <p className="text-gray-600">
                        Your account and data will be permanently deleted
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Additional Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For questions about the account deletion process or data
                    privacy, contact us at:
                  </p>
                  <p className="text-gray-700">
                    <strong>Imtiyaz Ltd</strong>
                    <br />
                    71-75 Shelton Street, Covent Garden, London, United Kingdom
                    <br />
                    <strong>Email:</strong> saeb@imtiyaz.io
                    <br />
                    <strong>Website:</strong> imtiyaz.io
                  </p>
                </div>

                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">
                    ⚠️ Please ensure you are certain of your decision before
                    submitting an account deletion request, as this action
                    cannot be undone.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
