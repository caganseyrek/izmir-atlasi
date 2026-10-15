"use client";

import { isRouteErrorResponse, useRouteError } from "react-router";

import { CloudAlertIcon, PackageOpenIcon } from "lucide-react";

import { FlexBox } from "@/components/base/flexbox";

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <FlexBox asColumn className="h-dvh w-dvw justify-center gap-3">
        <FlexBox className="bg-gray-2 rounded-full border-2 p-2">
          <PackageOpenIcon className="text-foreground-darker size-5 shrink-0" />
        </FlexBox>
        <FlexBox asColumn className="gap-1">
          <h2 className="text-lg! leading-none font-medium tracking-tight">Sayfa Bulunamadı</h2>
          <span>Bu adreste bir sayfa bulamadık.</span>
        </FlexBox>
      </FlexBox>
    );
  }

  return (
    <FlexBox asColumn className="h-dvh w-dvw justify-center gap-3">
      <FlexBox className="bg-gray-2 rounded-full border-2 p-2">
        <CloudAlertIcon className="text-foreground-darker size-5 shrink-0" />
      </FlexBox>
      <FlexBox asColumn className="gap-1">
        <h2 className="text-lg! leading-none font-medium tracking-tight">Bir Hata Oluştu</h2>
        <span>Bir hata ile karşılaştık. Bunun için çok üzgünüz.</span>
      </FlexBox>
    </FlexBox>
  );
}
