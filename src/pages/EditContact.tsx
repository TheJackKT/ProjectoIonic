
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';


import './EditContact.css'
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const EditContact: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const { contacts, updateContact } = useContacts();

  const contact = contacts.find(
    (c) => c.id === Number(id)
  );

  const [name, setName] = useState(contact?.name || '');
  const [phone, setPhone] = useState(contact?.phone || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [address, setAddress] = useState(contact?.address || '');
  const [photo, setPhoto] = useState(contact?.photo || '');

  if (!contact) {
    return <IonPage><IonContent>Contacto no encontrado</IonContent></IonPage>;
  }

  const saveChanges = () => {
    updateContact({
      id: contact.id,
      name,
      phone,
      email,
      address,
      photo
    });

    history.push('/home');
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar className="toolbar-edit">
          <IonTitle>Editar Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding fondo-edit">

  <div className="contenedor-edit">

    <IonItem className="item-edit">
      <IonInput
        fill="outline"
        label="Nombre"
        labelPlacement="stacked"
        className="input-edit"
        placeholder="Ingrese el nombre"
        value={name}
        onIonInput={(e) => setName(e.detail.value!)}
      />
    </IonItem>

    <IonItem className="item-edit">
      <IonInput
        fill="outline"
        label="Teléfono"
        labelPlacement="stacked"
        className="input-edit"
        placeholder="Ingrese el teléfono"
        value={phone}
        onIonInput={(e) => setPhone(e.detail.value!)}
      />
    </IonItem>

    <IonItem className="item-edit">
      <IonInput
        fill="outline"
        label="Correo"
        labelPlacement="stacked"
        className="input-edit"
        placeholder="Ingrese el correo"
        value={email}
        onIonInput={(e) => setEmail(e.detail.value!)}
      />
    </IonItem>

    <IonItem className="item-edit">
      <IonInput
        fill="outline"
        label="Dirección"
        labelPlacement="stacked"
        className="input-edit"
        placeholder="Ingrese la dirección"
        value={address}
        onIonInput={(e) => setAddress(e.detail.value!)}
      />
    </IonItem>

    <div className="url-edit">
      <IonItem className="item-edit">
        <IonInput
          fill="outline"
          label="URL Foto"
          labelPlacement="stacked"
          className="input-edit"
          placeholder="Ingrese la URL de la foto"
          value={photo}
          onIonInput={(e) => setPhoto(e.detail.value!)}
        />
      </IonItem>
    </div>

    <div className="preview-imagen">
      {photo && (
        <IonImg src={photo} />
      )}
    </div>

    <IonButton
      className="boton-guardar"
      expand="block"
      onClick={saveChanges}
    >
      Guardar Cambios
    </IonButton>

  </div>

</IonContent>

    </IonPage>
  );
};

export default EditContact;
