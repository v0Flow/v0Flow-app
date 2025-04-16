import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-muted-foreground">Last updated: April 16, 2025</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At v0Flow Studio, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Service, including:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, company information, and payment
                details.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our Service, including IP address, browser
                type, pages visited, and time spent on the Service.
              </li>
              <li>
                <strong>Project Data:</strong> Information related to your projects, including v0.dev ZIP files,
                requirements, and feedback.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send administrative information, such as updates to our terms and policies</li>
              <li>Send promotional communications, if you have opted in to receive them</li>
              <li>Monitor and analyze usage patterns and trends</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                payment processing, data analysis, and customer service.
              </li>
              <li>
                <strong>Consultants:</strong> If you book a strategy session or work with a consultant, we will share
                relevant project information with them.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or in response to valid requests by public
                authorities.
              </li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal data</li>
              <li>Restriction of processing of your personal data</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal data</li>
            </ul>

            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 16. We do not knowingly collect personal data
              from children under 16.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <Link href="mailto:privacy@v0flow.studio" className="text-primary hover:underline">
                privacy@v0flow.studio
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
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-primary hover:text-primary/80">
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
