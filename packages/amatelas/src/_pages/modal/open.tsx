import { Modal } from '@root/components/server/modal'
import { Button, Flex } from '@root/server'

export const ModalOpen = () => {
  return (
    <>
      <Modal open>
        <Flex>
          <div>MODAL IS HERE</div>
          <Button href="/modal" variant="filled" color="info" as="a">
            CLOSE MODAL
          </Button>
        </Flex>
      </Modal>
    </>
  )
}
