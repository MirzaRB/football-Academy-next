'use client'
import { ScoutLayout } from "@/layout";
import { ScoutProfileDetail } from "@/views";
import { useParams } from "next/navigation";
import React from "react";

const ProfileDetail = () => {
    return (
        <ScoutLayout>
          <ScoutProfileDetail/>
        </ScoutLayout>
      );
};

export default ProfileDetail;
