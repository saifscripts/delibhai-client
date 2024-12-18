import uploadIcon from "@/assets/icons/upload-icon.png";
import DatePicker from "@/components/forms/DatePicker";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useMe } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import { PersonalInfoSchema } from "../../schemas/personal-info.schema";
import SaveButton from "./SaveButton";

const genderOptions = [
  { value: "পুরুষ", label: "পুরুষ" },
  { value: "মহিলা", label: "মহিলা" },
  { value: "অন্যান্য", label: "অন্যান্য" },
];

const bloodGroupOptions = [
  { value: "এ+", label: "এ+" },
  { value: "বি+", label: "বি+" },
  { value: "এবি+", label: "এবি+" },
  { value: "ও+", label: "ও+" },
  { value: "এ-", label: "এ-" },
  { value: "বি-", label: "বি-" },
  { value: "এবি-", label: "এবি-" },
  { value: "ও-", label: "ও-" },
];

export default function EditPersonalInfo() {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
    isPending,
  } = useUpdateRider();
  const { user } = useMe();

  const onSubmit = async (data) => {
    // If user select nid image
    if (image) {
      // Create formData and append the image file
      const formData = new FormData();
      formData.append("image", image);

      // Upload the image to the imagebb
      const imgbbResult = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData,
      );

      // If image upload is not successful, setError message and return
      if (!imgbbResult?.data?.success) {
        return toast.error(
          imgbbResult.data.error.message || "Something went wrong",
        );
      }

      // If image upload is successful, set the url as nidURL field value
      data.nidURL = imgbbResult.data.data.url;
    } else {
      data.nidURL = null;
    }

    // Update data
    updateRider(data);
  };

  useEffect(() => {
    if (image) {
      setImageData(URL.createObjectURL(image));
    } else {
      setImageData(null);
    }
  }, [image]);

  useEffect(() => {
    if (user) {
      setImageData(user?.nidURL);
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  const defaultValues = {
    name: user?.name,
    fatherName: user?.fatherName,
    nid: user?.nid,
    gender: user?.gender,
    bloodGroup: user?.bloodGroup,
    dateOfBirth: user?.dateOfBirth,
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="link">Edit</Button>
      </DialogTrigger>
      <DialogContent className="hide-scrollbar max-h-[100svh] w-[512px] max-w-full overflow-y-auto p-0">
        <DialogHeader className="border-b bg-background px-4 py-2">
          <DialogTitle className="text-2xl font-bold">
            ব্যক্তিগত তথ্য
          </DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={PersonalInfoSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <Input name="name" label="নিজের নাম" placeholder="নিজের নাম লিখুন" />
          <Input
            name="fatherName"
            label="পিতার নাম"
            placeholder="পিতার নাম লিখুন"
          />
          <Input
            name="nid"
            label="জন্মনিবন্ধন/NID নম্বর"
            placeholder="জন্মনিবন্ধন/NID নম্বর লিখুন"
          />
          <Select
            name="gender"
            label="লিঙ্গ"
            placeholder="লিঙ্গ নির্বাচন করুন"
            options={genderOptions}
          />
          <Select
            name="bloodGroup"
            label="রক্তের গ্রুপ"
            placeholder="রক্তের গ্রুপ নির্বাচন করুন"
            options={bloodGroupOptions}
          />
          <DatePicker
            name="dateOfBirth"
            label="জন্ম তারিখ"
            placeholder="জন্ম তারিখ নির্বাচন করুন"
          />
          <div>
            <label className="font-bold">জন্মনিবন্ধন/NID এর ছবি</label>
            <label
              htmlFor="image-upload"
              className="relative mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary p-1"
            >
              {imageData && (
                <XIcon
                  className="absolute -right-1 -top-1 z-10 cursor-pointer rounded-full bg-muted p-1"
                  size={24}
                  onClick={() => setImageData(null)}
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {imageData && (
                <img src={imageData} alt="Upload" className="rounded-lg" />
              )}
              {!imageData && (
                <div className="flex flex-col items-center justify-center gap-2 py-2 sm:gap-4 sm:py-6">
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    className="size-20 rounded-lg"
                  />
                  <span className="text-sm text-foreground/70">
                    ছবি আপলোড করুন
                  </span>
                </div>
              )}
            </label>
          </div>

          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
