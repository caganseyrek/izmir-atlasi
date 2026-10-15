import { LoaderIcon } from "lucide-react";

import { FlexBox } from "@/components/base/flexbox";

export function PageLoader() {
  return (
    <FlexBox asColumn className="h-dvh w-dvw justify-center">
      <LoaderIcon className="animate-spin" />
    </FlexBox>
  );
}
