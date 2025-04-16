import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-2 text-muted-foreground">Last updated: April 16, 2025</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to v0Flow Studio. These Terms of Service govern your use of our website and services. By accessing
              or using v0Flow Studio, you agree to be bound by these Terms.
            </p>

            <h2>2. Definitions</h2>
            <p>
              <strong>"Service"</strong> refers to the v0Flow Studio platform, which transforms v0.dev prototypes into
              full-stack systems.
            </p>
            <p>
              <strong>"User"</strong> refers to individuals who access or use the Service, including clients and
              consultants.
            </p>
            <p>
              <strong>"Content"</strong> refers to all information and materials uploaded, posted, or otherwise made
              available through the Service.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. You agree to provide accurate,
              current, and complete information during the registration process and to update such information to keep
              it accurate, current, and complete.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by v0Flow Studio and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws.
            </p>

            <h2>6. User Content</h2>
            <p>
              You retain all rights to any content you submit, post, or display on or through the Service. By submitting
              content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce,
              modify, adapt, publish, translate, and distribute your content in any existing or future media.
            </p>

            <h2>7. Prohibited Uses</h2>
            <p>You agree not to use the Service:</p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any material that is defamatory, obscene, or offensive</li>
              <li>To impersonate or attempt to impersonate any person or entity</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
            </ul>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or
              liability, for any reason, including breach of these Terms.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall v0Flow Studio be liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or business opportunities, arising out of or in
              connection with your use of the Service.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <Link href="mailto:legal@v0flow.studio" className="text-primary hover:underline">
                legal@v0flow.studio
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">© 2025 v0Flow Studio. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-primary hover:text-primary/80">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
