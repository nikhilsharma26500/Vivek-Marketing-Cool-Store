import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
    return (
      <>
        <Modal title="Test" description="Test Description" isOpen onClose={() => {}}>
          Children
        </Modal>
      </>
    )
  }

  export default SetupPage;
  