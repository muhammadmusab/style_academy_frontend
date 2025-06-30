import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group";
import { Label } from "@/components/ui/form/label";
const page = () => {
  return (
    <div className="flex items-center justify-center mx-auto pb-[100px] sm:justify-start w-full">
      <div>
        <h3 className="mb-[30px] font-bold font-roboto">
          Choose Payment Method
        </h3>
        <RadioGroup defaultValue="paymentMethod">
          <div className="flex items-center my-2">
            <RadioGroupItem
              className="mr-[5px] w-[20px] h-[20px]"
              value="cod"
              id="cod"
            />
            <Label className="" htmlFor="cod">
              Cash On Delivery
            </Label>
          </div>

          <div className="flex items-center my-2">
            <RadioGroupItem
              className="mr-[5px] w-[20px] h-[20px]"
              value="stripe"
              id="stripe"
            />
            <Label className="" htmlFor="stripe">
              Stripe
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default page;
