import { cn } from "@/lib/utils";
import { z } from "zod";

export default function Field({ value, label, icon }) {
  return (
    <div className="border-light flex items-start gap-3 border-b py-2">
      <div className="bg-light flex aspect-square w-12 flex-shrink-0 items-center justify-center rounded-full">
        <img src={icon} alt={label} className="w-full" />
      </div>

      <div className="text-foreground/80">
        {z.string().url().safeParse(value).success ? (
          <div className="flex flex-col">
            <p className="mb-1 font-bold">{label}</p>
            <img
              src={value}
              alt={label}
              className="w-full max-w-md rounded-lg"
            />
          </div>
        ) : Array.isArray(value) ? (
          <div className="flex flex-col">
            {value.length > 0 ? (
              value.map((value, index) => (
                <p key={index} className="text-lg font-bold">
                  {value}
                </p>
              ))
            ) : (
              <p className="text-lg font-bold text-destructive/80">
                তথ্য প্রদান করুন
              </p>
            )}
            <p>{label}</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <p
              className={cn("text-lg font-bold", {
                "text-destructive/80": !value,
              })}
            >
              {value || "তথ্য প্রদান করুন"}
            </p>
            <p>{label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
