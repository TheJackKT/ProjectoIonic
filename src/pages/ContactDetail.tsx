
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from '@ionic/react';

import './ContactDetail.css';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const ContactDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const { contacts, deleteContact } = useContacts();

  const contact = contacts.find(
    (c) => c.id === Number(id)
  );

  if (!contact) {
    return <IonPage><IonContent>Contacto no encontrado</IonContent></IonPage>;
  }

  const removeContact = () => {
    deleteContact(contact.id);
    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
    
          <IonTitle>Detalle</IonTitle>

      </IonHeader>
      

      <IonContent className="ion-padding fondo-detail">

    
    <IonCard className="card-detail">

        <div className="contenedor-detail">

            <div>

                <IonImg
                    className="imagen-contacto"
                    src={contact.photo}
                />

            </div>

            <div className="info-contacto">

                <div className="nombre-contacto">
                    {contact.name}
                </div>

                <div className="dato-contacto">
                    <strong>Teléfono:</strong> {contact.phone}
                </div>

                <div className="dato-contacto">
                    <strong>Correo:</strong> {contact.email}
                </div>

                <div className="dato-contacto">
                    <strong>Dirección:</strong> {contact.address}
                </div>

                <div className="botones-detail">

                    <IonButton
                        className="boton-editar"
                        onClick={() =>
                            history.push(`/edit/${contact.id}`)
                        }
                    >
                        Editar
                    </IonButton>

                    <IonButton
                        className="boton-eliminar"
                        onClick={removeContact}
                    >
                        Eliminar
                    </IonButton>

                </div>

            </div>

        </div>

    </IonCard>

</IonContent>

    </IonPage>
  );
};

export default ContactDetail;

