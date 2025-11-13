"use client";

import ChatSuccessStory from "@/components/sections/ChatSuccessStory";

interface ChatMessage {
  type: 'incoming' | 'outgoing'
  text: string
  time: string
}

interface IndustryBreakdownProps {
  badge?: string
  title?: string
  subtitle?: string
  chatHeader?: string
  chatStatus?: string
  messages?: ChatMessage[]
  inputPlaceholder?: string
  indicator1?: string
  indicator2?: string
  indicator3?: string
  footerText?: string
  footerAttribution?: string
}

export default function IndustryBreakdownSection(props: IndustryBreakdownProps) {
  return <ChatSuccessStory {...props} />;
}

