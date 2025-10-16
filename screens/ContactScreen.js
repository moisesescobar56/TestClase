import { Layout, Input, ButtonRounded } from '../components';

export default function ContactScreen(){
    return (
        <Layout title="Contacto">
             <Input 
                label="Email" 
                editable={true}
                placeholder="name@mail.com" />
            <Input 
                label="Asunto" 
                editable={true}
                placeholder="Consulta" />    
            <Input 
                label="Mensaje" 
                editable={true}
                placeholder="escribir aqui..."
                lines={4} />
            <ButtonRounded 
                title="Enviar" />   
        </Layout>
    );
}