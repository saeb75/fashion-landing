import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - AI Personal Assistant",
  description:
    "Learn how we protect your privacy and handle your data in our AI-powered personal assistant application.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
