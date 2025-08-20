import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - AI Personal Assistant",
  description: "Read our terms of service for using the AI personal assistant application and subscription services.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
