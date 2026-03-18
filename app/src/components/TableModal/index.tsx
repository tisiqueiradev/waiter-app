import { Modal, TouchableOpacity, Platform } from "react-native";


import { Text } from '../Text';
import { Overlay, ModalBody, Header, Form, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../ui/Button";
import { SetStateAction, useState } from "react";

interface TableModalProps {

  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}


export function TableModal({ visible, onClose, onSave }: TableModalProps) {

  const [table, setTable] = useState('')

  function handleSave() {
    onSave(table);
    onClose();
  }


  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"

    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'} >
        <ModalBody>
          <Header>
            <Text weight={"600"}>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color={'#666'} />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder={'Número da mesa'}
              placeholdercolor={'#ccc'}
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button
              onPress={handleSave}
              disabled={table.length === 0}

            >Salvar
            </Button>
          </Form>
        </ModalBody>

      </Overlay>
    </Modal >
  )
}
