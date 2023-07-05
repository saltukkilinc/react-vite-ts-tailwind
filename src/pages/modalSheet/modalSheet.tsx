import Sheet from "react-modal-sheet";
import avisSpecialOffer from "../../assets/avisSpecialOffer.png";
import hiltonSpecialOffer from "../../assets/hiltonSpecialOffer.png";
import allianzSpecialOffer from "../../assets/allianzSpecialOffer.png";

function ModalSheet({
  isOpen,
  onClose,
  modalSheetHeight,
}: {
  isOpen: boolean;
  onClose: () => void;
  modalSheetHeight: number;
}) {
  return (
    <div>
      <Sheet
        isOpen={isOpen}
        onClose={() => onClose()}
        snapPoints={[
          modalSheetHeight + 1,
          modalSheetHeight,
          modalSheetHeight - 1,
          0,
        ]}
        initialSnap={1}
      >
        <Sheet.Backdrop onTap={onClose} />
        <Sheet.Container
          style={{ borderRadius: "32px 32px 0px 0px"}}
        >
          <Sheet.Header>
            <div className="text-center text-lg font-medium mt-[30px] mb-7">
              Special Offers
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <SpecialOffersModalContent onClose={onClose} />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}

const SpecialOffersModalContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="h-full pb-10 mx-6 flex flex-col overflow-auto">
      <p className="text-base font-normal text-[#777B83] mb-6 ">
        Complete your trip quickly and easily with other services for a
        well-planned travel!
      </p>
      <p className="text-base font-normal text-[#777B83] mb-3 ">
        Special offers are here for you.
      </p>

      <div className="flex flex-col flex-1">
        <button className="flex flex-col justify-center items-center">
          <img
            src={avisSpecialOffer}
            alt="Avis Special Offer Image"
            className="w-full max-w-[340px] h-auto mb-4 "
          />
        </button>
        <button className="flex flex-col justify-center items-center">
          <img
            src={hiltonSpecialOffer}
            alt="Hilton Special Offer Image"
            className="w-full max-w-[340px] h-auto mb-4 "
          />
        </button>
        <button className="flex flex-col justify-center items-center">
          <img
            src={allianzSpecialOffer}
            alt="Allianz Special Offer Image"
            className="w-full max-w-[340px] h-auto mb-[21px] "
          />
        </button>
      </div>

      <SpecialOfferModalButton onClose={onClose} />
    </div>
  );
};

const SpecialOfferModalButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      className="w-full h-[52px] bg-[#15BCD3] text-base font-semibold text-white rounded-[18px] shrink-0"
      onClick={onClose}
    >
      No Thanks!
    </button>
  );
};

export default ModalSheet;
