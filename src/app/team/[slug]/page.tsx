import React from "react";
import TeamMember from "@/components/sections/TeamMember";

interface TeamMemberPageProps {
  params: {
    slug: string;
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  return <TeamMember slug={params.slug} />;
}
