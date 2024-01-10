import { useFooter } from "@/contexts/FooterContext";
import Button from "./Button";

function FixedPattern({ activeLanguage }) {
  const { isFooterInView } = useFooter();

  if (isFooterInView) return null;
  return (
    <div className="hidden lg:block fixed bottom-0 right-0 z-50">
      <img src="/assets/blob.svg" className="w-60" />
      <p className="text-white text-lg absolute top-[40%] left-[20%] font-bold">
        Holocrow.com
      </p>
      <div className="absolute top-[60%] left-[28%]">
        <Button to="/signup" type="small">
          {activeLanguage === "en" ? "CONNECT" : "GİRİŞ"}
        </Button>
      </div>
    </div>
  );
}

export default FixedPattern;
