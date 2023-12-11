/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import { AppHead } from "../components/app-head";
import MobileHeader from "../components/mobile-header";
import styles from '../styles/Legal.module.scss';
import Image from "next/image";
import LegalHeader from "../components/legal-header";
import Footer from "../components/Footer";
import LegalContainer from "../components/legal-container";
import { useRouter } from "next/router";



const Terms: NextPage = () => {

    const router = useRouter()

    const language = router.locale;


    if (language == 'espanol') {
        return (
            <>
                <LegalContainer>
                    <h2 style={{ textAlign: 'center' }}>Términos y condiciones</h2>
                    <p>
                        <strong>¡Bienvenido a StoryPlace!</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>LEA ATENTAMENTE ESTE ACUERDO DE TÉRMINOS DE USO (LOS «TÉRMINOS DE USO»). STORYPLACE, INC. («STORYPLACE») OPERA LA APLICACIÓN MÓVIL «STORYPLACE» (LA «APLICACIÓN»), SUS SITIOS WEB ASOCIADOS, INCLUIDO
                        </strong>
                        <a target="_blank" href="https://www.storyplace.com/" rel="noreferrer">
                            <strong>WWW.STORYPLACE.COM</strong>
                        </a>
                        <strong>
                            (CONJUNTAMENTE, EL «SITIO WEB»), ASÍ COMO UNA SERIE DE SERVICIOS RELACIONADOS (CONJUNTAMENTE, CON LA APLICACIÓN, LA PLATAFORMA Y EL SITIO WEB, LOS «SERVICIOS»). AL HACER CLIC EN EL BOTÓN «ACEPTO», COMPLETAR EL PROCESO DE REGISTRO DE LA APLICACIÓN O
                        </strong>
                        <strong>LA PLATAFORMA, NAVEGAR POR EL SITIO WEB O DESCARGAR LA APLICACIÓN, DECLARA QUE (1)
                        </strong>
                        <strong>HA LEÍDO, COMPRENDIDO Y ACEPTA REGIRSE POR LOS TÉRMINOS DE USO, (2) TIENE LA EDAD LEGAL EN SU LUGAR DE DOMICILIO PARA CELEBRAR UN CONTRATO VINCULANTE CON STORYPLACE Y (3) TIENE LA AUTORIDAD PARA ACEPTAR LOS TÉRMINOS DE USO PERSONALMENTE O EN NOMBRE DE LA EMPRESA QUE HA NOMBRADO COMO USUARIO Y PARA OBLIGAR A ESA EMPRESA A CUMPLIR LOS TÉRMINOS DE USO. EL TÉRMINO «USTED» SE REFIERE A LA PERSONA FÍSICA O JURÍDICA, SEGÚN CORRESPONDA, IDENTIFICADA COMO USUARIO CUANDO SE REGISTRÓ A TRAVÉS DE LOS SERVICIOS. SI NO ESTÁ DE ACUERDO CON LOS TÉRMINOS DE USO, NO PODRÁ ACCEDER NI UTILIZAR NINGUNA PARTE DE LOS SERVICIOS.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>TENGA EN CUENTA LOS TÉRMINOS DE ESTE ACUERDO ENTRE NOSOTROS, A MENOS QUE OPTE POR NO PARTICIPAR EN EL ACUERDO DE ARBITRAJE: (1) SÓLO SE LE PERMITIRÁ PRESENTAR DEMANDAS Y SOLICITAR REPARACIÓN CONTRA NOSOTROS A TÍTULO INDIVIDUAL, NO COMO DEMANDANTE O MIEMBRO DE UNA DEMANDA COLECTIVA EN CUALQUIER ACCIÓN O PROCESO JUDICIAL COLECTIVO O REPRESENTATIVO; Y (2) RENUNCIA A SU DERECHO A SOLICITAR UNA REPARACIÓN ANTE UN TRIBUNAL DE JUSTICIA Y A QUE SUS DEMANDAS SEAN JUZGADAS CON JURADO.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>CUALQUIER DISPUTA O DEMANDA RELACIONADA DE ALGUNA MANERA CON SU USO DE LOS SERVICIOS SE REGIRÁ E INTERPRETARÁ POR Y BAJO LAS LEYES DEL ESTADO DE CALIFORNIA, DE CONFORMIDAD CON LAS REGLAS DE ARBITRAJE
                        </strong>
                        <strong>Y DE CONFORMIDAD CON LAS NORMAS Y PROCEDIMIENTOS DE ARBITRAJE SIMPLIFICADOS DE JUDICIAL ARBITRATION AND MEDIATION SERVICES, INC. («JAMS»), EN VIGOR EN ESE MOMENTO, POR UN ÁRBITRO COMERCIAL CON AMPLIA EXPERIENCIA EN LA RESOLUCIÓN DE CONTROVERSIAS DE PROPIEDAD INTELECTUAL Y CONTRATOS COMERCIALES, QUE SERÁ SELECCIONADO DE LA LISTA CORRESPONDIENTE DE ÁRBITROS DE JAMS DE CONFORMIDAD CON LAS NORMAS Y PROCEDIMIENTOS DE ARBITRAJE SIMPLIFICADOS DE JAMS.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Su uso y participación en determinados Servicios puede estar sujeto a condiciones adicionales («Términos Complementarios»), y dichos Términos Complementarios se detallarán en los Términos de Uso o se le presentarán para que los acepte cuando se registre. Si los Términos de Uso son incompatibles con los Términos Complementarios, prevalecerán los Términos Complementarios con respecto a dicho Servicio. Los Términos de Uso y cualquier Término Complementario aplicable se denominan en lo sucesivo el «Acuerdo».</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Los Servicios incluyen, entre otros: la Aplicación y la plataforma en línea que ofrece un servicio de diario público que permite a los particulares publicar, compartir y guardar historias escritas y de audio relacionadas con determinados temas y/o lugares.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>TENGA EN CUENTA QUE STORYPLACE puede modificar el Acuerdo en cualquier momento, a su entera discreción. Cuando se realicen cambios, STORYPLACE publicará una nueva copia de los Términos de Uso en el sitio web y en la aplicación, y cualquier nuevo Término Complementario estará disponible en el Servicio afectado o a través de él, en el Sitio web o en la Aplicación. También actualizaremos la fecha de «Última actualización» en la parte superior de los Términos de Uso. Si realizamos algún cambio importante y usted se ha registrado con nosotros para crear una Cuenta, también le enviaremos un correo electrónico a la última dirección de correo electrónico que nos haya proporcionado de conformidad con el Acuerdo. Cualquier cambio en el Acuerdo entrará en vigor inmediatamente para los nuevos usuarios del Sitio web, la Aplicación y/o los Servicios y entrará en vigor treinta (30) días después de la publicación de la notificación de dichos cambios en el Sitio web para los usuarios existentes, siempre que cualquier cambio importante entre en vigor para los usuarios que tengan una Cuenta con nosotros treinta (30) días después de publicar la notificación de dichos cambios en el Sitio web o treinta (30) días después del envío de un aviso por correo electrónico sobre dichos cambios a Usuarios Registrados (definidos en la sección 2.1 más adelante). STORYPLACE puede exigirle que dé su consentimiento al Acuerdo actualizado de una manera específica antes de permitir el uso posterior del Sitio web, la Aplicación y/o los Servicios. Si no está de acuerdo con alguno de los cambios después de recibir una notificación de dichos cambios, deberá dejar de utilizar el Sitio web, la Aplicación y los Servicios. De lo contrario, su uso continuo del Sitio web, la Aplicación y los Servicios constituye su aceptación sustitutiva de dicho(s) cambio(s). CONSULTE PERIÓDICAMENTE EL SITIO WEB PARA VER LOS TÉRMINOS VIGENTES EN ESE MOMENTO.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Uso de los Servicios y las Propiedades de STORYPLACE.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>La Aplicación, el Sitio web, los Servicios y la información y el contenido disponibles en el Sitio web y en la Aplicación, así como los Servicios (tal como se definen estos términos en el presente documento) (cada uno de ellos, una «Propiedad de STORYPLACE» y, en conjunto, las «Propiedades de STORYPLACE») están protegidos por las leyes de derechos de autor de todo el mundo.&nbsp;</strong>
                    </p>
                    <ol>
                        <li>
                            <strong>Términos de la licencia.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Licencia de aplicación</strong>
                                </span>
                                <strong>. Sujeto al cumplimiento del Acuerdo, STORYPLACE le concede una licencia limitada, no exclusiva, intransferible, no sublicenciable y revocable para descargar, instalar y utilizar una copia de la Aplicación en un único dispositivo móvil u ordenador que posea o controle, y para ejecutar dicha copia de la Aplicación únicamente para sus fines personales o internos. Además, con respecto a cualquier aplicación a la que se acceda a través de la Tienda de Aplicaciones de Apple o se descargue de ella (una «Aplicación obtenida de la Tienda de Aplicaciones»), solo utilizará la aplicación con origen en la Tienda de Aplicaciones (a) en un producto de la marca Apple que ejecute iOS (el sistema operativo propietario de Apple) y (b) según lo permitan las «Reglas de uso» establecidas en los Términos de servicio de la Tienda de Aplicaciones de Apple. Sin perjuicio de lo dispuesto en la primera frase de esta sección, con respecto a cualquier acceso a la Aplicación a través de la tienda de Google Play o descargada de ella (una «Aplicación obtenida de Google Play»), es posible que tenga derechos de licencia adicionales con respecto al uso de la Aplicación de forma compartida dentro del grupo familiar designado.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Actualizaciones</strong>
                                </span>
                                <strong>. Usted entiende que las Propiedades de STORYPLACE están evolucionando. En consecuencia, STORYPLACE puede exigirle que acepte las actualizaciones de las Propiedades de STORYPLACE que haya instalado en su ordenador o dispositivo móvil. Usted reconoce y acepta que STORYPLACE puede actualizar las Propiedades de STORYPLACE con o sin notificación previa. Es posible que deba actualizar el software de terceros de vez en cuando para poder utilizar las Propiedades de STORYPLACE.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Ciertas restricciones</strong>
                                </span>
                                <strong>. Los derechos que se le otorgan en el Acuerdo están sujetos a las siguientes restricciones: (a) no podrá licenciar, vender, alquilar, arrendar, transferir, reproducir, distribuir, alojar ni explotar comercialmente de ningún otro modo las Propiedades de STORYPLACE ni ninguna parte de las Propiedades de STORYPLACE, incluido el Sitio web, (b) no enmarcará ni utilizará técnicas de encuadre para incluir ninguna marca comercial, logotipo u otras Propiedades de STORYPLACE (incluidas imágenes, texto, diseño de página o formulario) de STORYPLACE; (c) no utilizará ninguna metaetiqueta u otro «texto oculto» con el nombre o marcas comerciales de STORYPLACE; (d) no modificará, traducirá, adaptará, fusionará, realizará trabajos derivados, desensamblará, descompilará, compilará de forma inversa ni aplicará ingeniería inversa a ninguna parte de las Propiedades de STORYPLACE, excepto en la medida en que las restricciones anteriores estén expresamente prohibidas por la ley aplicable; (e) no utilizará ningún software, dispositivo u otro proceso manual o automatizado (incluidos, entre otros, arañas, robots, scrapers, rastreadores, avatares, herramientas de minería de datos o similares) para «extraer» o descargar datos de cualquier página web contenida en el sitio web (con la salvedad de que concedemos a los operadores de motores de búsqueda públicos permiso revocable para utilizar arañas que copien materiales del Sitio web con el único fin de crear índices de búsqueda de materiales disponibles para el público, pero no cachés o archivos de dichos materiales); (f) no accederá a las Propiedades de STORYPLACE para crear un sitio web, aplicación o servicio similar o competitivo; (g) excepto como se indica expresamente en este documento, no se puede copiar, reproducir, distribuir, republicar, descargar, mostrar, o transmitir ninguna parte de cualquier forma o por cualquier medio de las Propiedades de STORYPLACE; y (h) no eliminará ni destruirá ningún aviso de derechos de autor u otras marcas de propiedad contenidas en o sobre las Propiedades de STORYPLACE. Cualquier versión, actualización u otra adición futura a las Propiedades de STORYPLACE estará sujeta al Acuerdo. STORYPLACE, sus proveedores y prestadores de servicios se reservan todos los derechos no otorgados en el Acuerdo. Cualquier uso no autorizado de cualquier Propiedad de STORYPLACE pone fin a las licencias concedidas por STORYPLACE de conformidad con el Acuerdo, al tiempo que garantiza que los derechos de indemnización que el usuario adeuda a StoryPlace en virtud del presente documento permanezcan vigentes tras la terminación o el vencimiento de este Acuerdo.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Materiales de terceros</strong>
                                </span>
                                <strong>. Como parte de las Propiedades de STORYPLACE, es posible que tenga acceso a materiales alojados por terceros. Usted acepta que es imposible que STORYPLACE supervise dichos materiales y que accede a ellos
                                </strong>
                                <strong>por su cuenta y riesgo</strong>
                                <strong>.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Registrando su cuenta</strong>
                                </span>
                                <strong>. Para acceder a determinadas funciones de las Propiedades de STORYPLACE, es posible que deba convertirse en Usuario Registrado («Usuario» o «Usuario Registrado»). A los efectos del Acuerdo, un «Usuario» o «Usuario Registrado»</strong>
                                <strong>
                                    es un usuario que ha registrado una cuenta en el sitio web, PRO o la Aplicación («Cuenta») o que tiene una cuenta válida en el servicio de redes sociales («SNS») a través de la cual el usuario se ha conectado al sitio web o la aplicación (cada una de esas cuentas, una «Cuenta de Terceros»).</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Acceso a través de un SNS.</strong>
                                </span>
                                <strong>
                                    Si accede a las Propiedades de STORYPLACE a través de un SNS como parte de la funcionalidad del Sitio web, la Aplicación y/o los Servicios, puede vincular su Cuenta con Cuentas de Terceros, permitiendo que STORYPLACE acceda a su Cuenta de Terceros, según lo permitido en los términos y condiciones aplicables que rigen el uso de cada Cuenta de Terceros. Usted declara que tiene derecho a divulgar la información de inicio de sesión de su Cuenta de Terceros a STORYPLACE y/o a conceder a STORYPLACE el acceso a su Cuenta de Terceros (lo que incluye, entre otros, para su uso con los fines descritos en este documento) sin infringir ninguno de los términos y condiciones que rigen el uso de la Cuenta de Terceros correspondiente y sin obligar a STORYPLACE a pagar ninguna tarifa ni someter a STORYPLACE a las limitaciones de uso impuestas por dichos proveedores de servicios externos. Al conceder a STORYPLACE el acceso a cualquier Cuenta de Terceros, usted comprende que STORYPLACE puede acceder, poner a disposición y almacenar (si corresponde) cualquier información, datos, texto, software, música, sonido, fotografías, gráficos, vídeo, mensajes, etiquetas u otros materiales accesibles a través de las Propiedades de STORYPLACE (conjuntamente, «Contenido») que haya proporcionado y almacenado en su Cuenta de Terceros («Contenido de SNS») para que esté disponible en y a través de las Propiedades de STORYPLACE a través de su Cuenta. A menos que se especifique lo contrario en el Acuerdo, todo el Contenido de SNS se considerará Su Contenido a todos los efectos del Acuerdo. Dependiendo de las Cuentas de Terceros que elija y de acuerdo con la configuración de privacidad que haya establecido en dichas Cuentas de Terceros, la información de identificación personal que publique en sus Cuentas de Terceros puede estar disponible en y a través de su Cuenta en las Propiedades de STORYPLACE. Tenga en cuenta que, si una Cuenta de Terceros o un servicio asociado deja de estar disponible o si el proveedor de servicios externo cancela el acceso de STORYPLACE a dicha Cuenta de Terceros, el Contenido de SNS dejará de estar disponible en y a través de las Propiedades de STORYPLACE. Puede deshabilitar la conexión entre su cuenta y sus Cuentas de Terceros en cualquier momento accediendo a la sección «Configuración» del Sitio web. TENGA EN CUENTA QUE SU RELACIÓN CON LOS PROVEEDORES DE SERVICIOS EXTERNOS ASOCIADOS A SUS CUENTAS DE TERCEROS SE RIGE ÚNICAMENTE POR SUS ACUERDOS CON DICHOS PROVEEDORES DE SERVICIOS EXTERNOS, Y STORYPLACE SE EXIME DE CUALQUIER RESPONSABILIDAD POR LA INFORMACIÓN DE IDENTIFICACIÓN PERSONAL QUE DICHOS PROVEEDORES DE SERVICIOS EXTERNOS LE PUEDAN PROPORCIONAR EN VIOLACIÓN DE LA CONFIGURACIÓN DE PRIVACIDAD QUE HAYA ESTABLECIDO EN DICHAS CUENTAS DE TERCEROS. STORYPLACE no hace ningún esfuerzo por revisar ningún Contenido de SNS para ningún propósito, incluidos, entre otros, para comprobar su precisión, legalidad o no infracción, y STORYPLACE no es responsable de ningún Contenido de SNS.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Datos de registro</strong>
                                </span>
                                <strong>. Al registrar una cuenta en el Sitio web, usted se compromete a (a) proporcionar información verdadera, precisa, actual y completa sobre usted tal como se indica en el formulario de registro (los «Datos de Registro»); y (b) mantener y actualizar de inmediato los Datos de Registro para que sigan siendo verdaderos, precisos, actuales y completos. Usted declara que (l) tiene al menos trece (13) años; (m) es mayor de edad para celebrar un contrato vinculante; y (n) no es una persona a la que se le prohíba utilizar las Propiedades de STORYPLACE en virtud de las leyes de los Estados Unidos, su lugar de residencia o cualquier otra jurisdicción aplicable. Si no tiene la edad legal para celebrar acuerdos vinculantes dentro de la jurisdicción de su domicilio, debe proporcionar un permiso por escrito en su nombre de un tutor o padre autorizado que sea mayor de edad para quedar obligado en virtud de estos. Usted es responsable de todas las actividades que se realicen en su Cuenta. Usted acepta que supervisará su Cuenta para restringir el uso por parte de menores no autorizados y asumirá toda la responsabilidad por cualquier uso no autorizado de las Propiedades de STORYPLACE por parte de menores. No puede compartir su Cuenta ni su contraseña con nadie, y se compromete a (y) notificar inmediatamente a STORYPLACE cualquier uso no autorizado de su contraseña o cualquier otra violación de seguridad; y (z) salir de su Cuenta al final de cada sesión. Si proporciona información falsa, inexacta, desactualizada o incompleta, o si STORYPLACE tiene motivos razonables para sospechar que cualquier información que proporcione es falsa, inexacta, desactualizada o incompleta, STORYPLACE tiene el derecho de suspender o cancelar su Cuenta y negarle el uso actual o futuro de las Propiedades de STORYPLACE (o cualquier parte de estas). Usted se compromete a no crear una Cuenta utilizando una identidad o información falsas, o en nombre de alguien que no sea usted mismo. Usted acepta que no tendrá más de una cuenta por plataforma o SNS en un momento dado. STORYPLACE se reserva el derecho de eliminar o reclamar cualquier nombre de usuario en cualquier momento y por cualquier motivo, incluidas, entre otras, las afirmaciones de un tercero en el sentido de que un nombre de usuario infringe los derechos del tercero. Acepta no crear una cuenta ni utilizar las Propiedades de STORYPLACE si STORYPLACE lo ha eliminado antes o si anteriormente se le ha prohibido el acceso a alguna de las Propiedades de STORYPLACE.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Su cuenta</strong>
                                </span>
                                <strong>. Sin perjuicio de lo establecido en el presente que indique lo contrario, usted reconoce y acepta que no tendrá ningún derecho de propiedad sobre su Cuenta, y además reconoce y acepta que todos los derechos sobre su Cuenta son y serán para siempre propiedad y redundarán en beneficio de STORYPLACE. STORYPLACE se reserva el derecho de cancelar su Cuenta si ha estado inactiva (es decir, si no ha iniciado sesión en su Cuenta) durante ciento ochenta (180) días y, en tal caso, no tendrá derecho a ninguna contraprestación por dicha cancelación.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Equipo y software necesarios</strong>
                                </span>
                                <strong>. Usted debe proporcionar todo el equipo y el software necesarios para conectarse a las Propiedades de STORYPLACE, incluido, entre otros, un dispositivo móvil que sea adecuado para conectarse y utilizar las Propiedades de STORYPLACE, en los casos en que los Servicios ofrezcan un componente móvil. Usted es el único responsable de las tarifas, incluidas las tarifas de conexión a Internet o de telefonía móvil, en las que incurra al acceder a las Propiedades de STORYPLACE. Al proporcionar su número de teléfono móvil y utilizar los Servicios, usted acepta afirmativamente que usemos su número de teléfono móvil para llamadas y mensajes de texto con el fin de prestar y mejorar los Servicios. STORYPLACE no evaluará ni cobrará ninguna llamada o mensaje de texto, pero es posible que se apliquen cargos por mensajes estándar u otros cargos de su operador de telefonía móvil. Puede optar por no recibir nuestros mensajes de texto en su cuenta.</strong>
                            </li>
                        </ol>
                    </ol>
                    <ol>
                        <li>
                            <strong>Responsabilidad por el contenido.</strong>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Tipos de contenido</strong>
                            </span>
                            <strong>. Usted reconoce que todo el Contenido, incluidas las Propiedades de STORYPLACE, es responsabilidad exclusiva de la parte que originó dicho Contenido. Esto significa que usted, y no STORYPLACE, es totalmente responsable de todo el Contenido que cargue, publique, envíe por correo electrónico, transmita o ponga a disposición de otro modo («Poner a Disposición») a través de las Propiedades de STORYPLACE («Su Contenido»), y que usted y otros Usuarios Registrados de las Propiedades de STORYPLACE, y no STORYPLACE, son igualmente responsables de todo el Contenido que usted y ellos Pongan a Disposición a través de las Propiedades de STORYPLACE («Contenido del Usuario»).&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Sin obligación de preevaluar contenido.</strong>
                            </span>
                            <strong>
                                Usted reconoce que STORYPLACE no tiene la obligación de preevaluar el Contenido (incluido, entre otros, el Contenido del Usuario), aunque STORYPLACE se reserva el derecho, a su entera y absoluta discreción, de preevaluar, rechazar o eliminar cualquier Contenido. Al celebrar el Acuerdo, usted da su consentimiento irrevocable a dicha supervisión. Usted reconoce y acepta que no tiene expectativas de privacidad en relación con la transmisión de Su Contenido, incluidas, entre otras, las comunicaciones por chat, texto o voz. En caso de que STORYPLACE preevalúe, rechace o elimine cualquier Contenido, usted reconoce que STORYPLACE lo hará en beneficio de STORYPLACE, no en el suyo. Sin perjuicio de lo anterior, STORYPLACE tendrá el derecho de eliminar cualquier Contenido que infrinja el Acuerdo o que sea objetable por algún otro motivo.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Almacenamiento</strong>
                            </span>
                            <strong>. A menos que STORYPLACE lo acuerde expresamente por escrito en otro lugar, STORYPLACE no tiene la obligación de almacenar ninguno de Su Contenido que usted Ponga a Disposición en las Propiedades de STORYPLACE. STORYPLACE no asume ninguna responsabilidad por la eliminación o precisión de ningún Contenido, incluido Su Contenido; por no almacenar, transmitir o recibir la transmisión del Contenido; ni por la seguridad, la privacidad, el almacenamiento o la transmisión de otras comunicaciones que se originen o impliquen el uso de las Propiedades de STORYPLACE. Ciertos Servicios pueden permitirle especificar el nivel en el que dichos Servicios restringen el acceso a Su Contenido. Usted es el único responsable de aplicar el nivel de acceso adecuado a Su Contenido, si lo hubiera. Si no lo elige, es posible que el sistema utilice de forma predeterminada su configuración más permisiva. Usted acepta que STORYPLACE se reserva el derecho de establecer límites razonables al uso y almacenamiento del Contenido por parte de STORYPLACE, incluido Su Contenido, como límites en cuanto al tamaño del archivo, el espacio de almacenamiento, la capacidad de procesamiento y los límites similares descritos en el Sitio web y según lo determine STORYPLACE a su entera discreción.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Propiedades de STORYPLACE.</strong>
                            </span>
                            <strong>
                                Excepto en lo que respecta a Su Contenido y el Contenido del Usuario, usted acepta que STORYPLACE y sus proveedores son propietarios de todos los derechos, títulos e intereses sobre las Propiedades de STORYPLACE, incluidos, entre otros, el software operativo de StoryPlace, el mapa y los contenidos de estos. Usted no eliminará, alterará ni ocultará ningún aviso de derechos de autor, marca comercial, marca de servicio u otros avisos de derechos de propiedad incorporados o adjuntos a las Propiedades de STORYPLACE.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Marcas comerciales</strong>
                            </span>
                            <strong>. El nombre de STORYPLACE y todos los gráficos, logotipos, marcas de servicio y nombres comerciales relacionados que se utilicen en o en relación con cualquier Propiedad de STORYPLACE o en relación con los Servicios son marcas comerciales de STORYPLACE y no se pueden utilizar sin permiso en relación con usted, sus productos y/o servicios ni con los productos y/o servicios de terceros. Otras marcas comerciales, marcas de servicio y nombres comerciales que puedan aparecer en las Propiedades de STORYPLACE son propiedad de sus respectivos dueños.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Otro contenido</strong>
                            </span>
                            <strong>. Salvo en lo que respecta a Su Contenido, usted acepta que no tiene ningún derecho, título o interés sobre ningún contenido que aparezca en o sobre las Propiedades de STORYPLACE.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Su Contenido</strong>
                            </span>
                            <strong>. STORYPLACE no reclama la propiedad de Su Contenido. Sin embargo, cuando usted, como Usuario Registrado, envíe o publique Su Contenido en o dentro de las Propiedades de STORYPLACE, usted declara que posee o tiene un derecho libre de regalías, perpetuo, irrevocable, mundial y no exclusivo (incluidos los derechos morales) y una licencia para usar, licenciar, reproducir, modificar, publicar, traducir, crear obras derivadas, distribuir, obtener ingresos u otra remuneración, y comunicarlo al público, reproducir y mostrar Su Contenido (en total o parcialmente) en todo el mundo y/o para incorporarlo a sus otras obras en cualquier forma, medio o tecnología ahora conocida o desarrollada posteriormente, durante toda la vigencia de cualquier derecho de propiedad intelectual mundial que pueda existir en Su Contenido.&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Licencia para Su Contenido</strong>
                            </span>
                            <strong>. Sujeto a cualquier configuración de cuenta aplicable que seleccione, usted otorga a STORYPLACE un derecho totalmente pagado, libre de regalías, perpetuo, irrevocable, mundial, libre de regalías, no exclusivo y totalmente sublicenciable (incluido cualquier derecho moral) y una licencia para usar, licenciar, distribuir, reproducir, modificar, adaptar, presentar públicamente y mostrar públicamente Su Contenido (en su totalidad o en parte) con el fin de operar el negocio de STORYPLACE. Recuerde que otros usuarios pueden buscar, ver, usar, modificar y reproducir cualquier contenido suyo que usted envíe a cualquier área «pública» de las Propiedades de STORYPLACE. Usted garantiza que el titular de cualquier derecho de propiedad intelectual mundial, incluidos los derechos morales, en Su Contenido, le ha otorgado una licencia irrevocable para su uso para permitirle conceder la licencia indicada anteriormente, o ha renunciado total y efectivamente a todos esos derechos y le ha otorgado de manera válida e irrevocable el derecho a conceder la licencia indicada anteriormente. Usted acepta que usted, y no STORYPLACE, es responsable de todo Su Contenido que Ponga a Disposición en o dentro de las Propiedades de STORYPLACE. Sujeto a la configuración de cuenta aplicable que seleccione, usted otorga a STORYPLACE un derecho totalmente pagado, libre de regalías, perpetuo, irrevocable, mundial, libre de regalías, no exclusivo y totalmente sublicenciable (incluido cualquier derecho moral) y una licencia para usar, licenciar, distribuir, reproducir, modificar, adaptar, presentar públicamente y mostrar públicamente Su Contenido (total o parcialmente, incluidos sus derechos derivados, afines, complementarios y conexos) para los propósitos de operar el negocio de STORYPLACE. Para
                            </strong>
                            <strong>evitar dudas, STORYPLACE se dedica actualmente a fomentar el intercambio global de historias y, con ello, conectar a los narradores y a los Creadores de Contenido</strong>
                            <strong>. Si posteriormente STORYPLACE entra en el negocio de producir obras audiovisuales basadas en alguno de Sus Contenidos, solo lo hará con su permiso expreso. Recuerde que otros usuarios pueden buscar, ver, usar, modificar y reproducir cualquier contenido suyo que usted envíe a cualquier área «pública» de las Propiedades de STORYPLACE.&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Nombre de usuario</strong>
                            </span>
                            <strong>. Sin perjuicio de lo dispuesto en este documento que indique lo contrario, al enviar Su Contenido a cualquier foro, comentario o cualquier otra área de las Propiedades de STORYPLACE, usted permite expresamente que STORYPLACE lo identifique mediante su nombre de usuario (que puede ser un seudónimo) como autor de Su Contenido en cualquier publicación de cualquier forma, medio o tecnología en la actualidad conocido o desarrollado posteriormente en relación con Su Contenido.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Su perfil</strong>
                            </span>
                            <strong>. El Contenido que publique en su perfil no podrá contener desnudos, violencia, contenido sexualmente explícito u ofensivo, según lo determine STORYPLACE a su entera y absoluta discreción. No puede publicar ni enviar a los servicios de impresión una fotografía de o hecha por otra persona sin el permiso de esa persona.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Comentarios</strong>
                            </span>
                            <strong>. Usted acepta que el envío de cualquier idea, sugerencia, documento o propuesta a STORYPLACE a través de sus páginas de sugerencias, comentarios, wiki, foro o similares («Comentarios») es bajo su propio riesgo y que STORYPLACE no tiene ninguna obligación (incluidas, entre otras, las obligaciones de confidencialidad) con respecto a dichos Comentarios. Usted declara y garantiza que tiene todos los derechos necesarios para enviar los Comentarios. Por la presente, usted otorga a STORYPLACE un derecho y una licencia totalmente pagados, libres de regalías, perpetuos, irrevocables, mundiales, no exclusivos y totalmente sublicenciables para utilizar, reproducir, ejecutar, mostrar, distribuir, adaptar, modificar, reformatear, crear obras derivadas y explotar comercialmente o no comercialmente de cualquier manera, todos y cada uno de los Comentarios, y para sublicenciar los derechos anteriores, en relación con el funcionamiento y mantenimiento de las Propiedades de STORYPLACE y/o el negocio de STORYPLACE.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Trampas y piratería.</strong>
                            </span>
                            <strong>
                                Usted se compromete a no hacer lo siguiente en ningún momento y bajo ninguna circunstancia:</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>Utilizar trampas, exploits, software de automatización, bots, hacks, mods o cualquier software no autorizado diseñado para modificar o interferir con cualquier Propiedad de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Interferir o dañar las Propiedades de STORYPLACE, lo que incluye, entre otros, mediante el uso de virus, bots de cancelación, troyanos, códigos dañinos, flood pings, ataques de denegación de servicio, suplantación de paquetes o IP, información de enrutamiento o dirección de correo electrónico falsificada o métodos o tecnologías similares;</strong>
                            </li>
                            <li>
                                <strong>Modificar o hacer que se modifique cualquier archivo que forme parte de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Interrumpir, sobrecargar o ayudar o contribuir a la interrupción o sobrecarga de: (i) cualquier computadora o servidor utilizado para ofrecer o respaldar las Propiedades de STORYPLACE; o (ii) el disfrute de las Propiedades de STORYPLACE por parte de cualquier otra persona;</strong>
                            </li>
                            <li>
                                <strong>Instituir, ayudar o participar en cualquier tipo de ataque, incluidos, entre otros, la distribución de un virus, los ataques de denegación de servicio a las Propiedades de STORYPLACE u otros intentos de interrumpir el uso o disfrute de las Propiedades de STORYPLACE por parte de cualquier otra persona;</strong>
                            </li>
                            <li>
                                <strong>Intentar obtener acceso no autorizado a las Propiedades de STORYPLACE, a las cuentas registradas a nombre de otros o a las computadoras, servidores o redes conectados a las Propiedades de STORYPLACE por cualquier medio que no sea la interfaz de usuario proporcionada por STORYPLACE, lo que incluye, entre otros, eludiendo o modificando, intentando eludir o modificar, o alentando o ayudando a cualquier otra persona a eludir o modificar, cualquier seguridad, tecnología, dispositivo o software que forme parte de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Acceder, manipular o utilizar áreas no públicas de las Propiedades de STORYPLACE, los sistemas informáticos de STORYPLACE, la propiedad intelectual de STORYPLACE o los sistemas de entrega técnica de los proveedores de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Intentar investigar, escanear o probar la vulnerabilidad de cualquier sistema o red de STORYPLACE (incluidas sus empresas matrices, subsidiarias y afiliadas, lo que se aplicará a lo largo del presente Acuerdo cuando se haga referencia a STORYPLACE), o infringir cualquier medida de seguridad o autenticación;</strong>
                            </li>
                            <li>
                                <strong>Interrumpir o interferir con la seguridad de las propiedades, los sistemas, los recursos, las cuentas, las contraseñas, los servidores o las redes de STORYPLACE conectados o accesibles a través de las Propiedades de STORYPLACE o cualquier sitio afiliado o enlazado; o</strong>
                            </li>
                            <li>
                                <strong>Evitar, omitir, eliminar, desactivar, copiar, codificar, deteriorar, descodificar o eludir de otro modo cualquier medida tecnológica implementada por STORYPLACE o cualquiera de los proveedores de STORYPLACE o cualquier otro tercero (incluido otro Usuario Registrado) para proteger las Propiedades de STORYPLACE.</strong>
                            </li>
                        </ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Actividades comerciales</strong>
                            </span>
                            <strong>. Usted acepta que, bajo ninguna circunstancia (excepto en la medida en que lo autorice expresamente el Acuerdo):</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>Reproducirá, duplicará, copiará, venderá, intercambiará, revenderá o explotará con cualquier fin comercial cualquier parte de las Propiedades de STORYPLACE (incluida su Cuenta), o el acceso o uso de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Cargará, publicará, enviará por correo electrónico, transmitirá o pondrá a disposición de cualquier otra forma cualquier otra forma de publicidad no solicitada o no autorizada, material promocional, «correo basura», «spam», «cartas en cadena», «esquemas piramidales» o cualquier otra forma de solicitud en relación con cualquier propiedad de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Utilizará las Propiedades de STORYPLACE o cualquier parte de estas para cualquier propósito comercial, lo que incluye, entre otros, comunicar o facilitar cualquier anuncio o solicitud comercial;</strong>
                            </li>
                            <li>
                                <strong>Participará en cualquier cadena de cartas, concursos, correo basura, esquemas piramidales, spam, encuestas u otros mensajes duplicados o no solicitados (comerciales o de otro tipo) en relación con las Propiedades de STORYPLACE; o</strong>
                            </li>
                            <li>
                                <strong>Comercializará cualquier producto o servicio para cualquier propósito comercial en o en relación con cualquiera de las Propiedades de STORYPLACE.</strong>
                            </li>
                        </ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Uso o acceso no autorizados</strong>
                            </span>
                            <strong>. Usted se compromete a no realizar, bajo ninguna circunstancia, lo siguiente:</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>Interferir o intentar interferir con el correcto funcionamiento de las Propiedades de STORYPLACE o conectarse o utilizar las Propiedades de STORYPLACE de cualquier forma que no esté expresamente permitida por el Acuerdo;</strong>
                            </li>
                            <li>
                                <strong>Recuperar sistemáticamente datos u otro contenido de las Propiedades de STORYPLACE para crear o compilar, directa o indirectamente, en descargas únicas o múltiples, una colección, una compilación, una base de datos, un directorio o similar, ya sea mediante métodos manuales o mediante el uso de bots, rastreadores, arañas o de otro modo;</strong>
                            </li>
                            <li>
                                <strong>Utilizar, exponer, replicar o encuadrar las Propiedades de STORYPLACE o cualquier elemento individual de las Propiedades de STORYPLACE, el nombre de STORYPLACE, cualquier marca comercial, logotipo u otra información de propiedad de STORYPLACE, la propiedad intelectual o el diseño de cualquier página o formulario contenido en una página, sin el consentimiento expreso por escrito de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Utilizar cualquier software no autorizado que acceda, intercepte, «mine» o recopile información de o a través de las Propiedades de STORYPLACE o que esté en tránsito desde o hacia las Propiedades de STORYPLACE, incluido, entre otros, cualquier software que lea áreas de RAM o flujos de tráfico de red utilizados por las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Interceptar, examinar u observar de otro modo cualquier protocolo de comunicaciones propietario utilizado por un cliente, un servidor o las Propiedades de STORYPLACE, ya sea mediante el uso de un analizador de redes, un rastreador de paquetes u otro dispositivo;</strong>
                            </li>
                            <li>
                                <strong>Hacer un uso automatizado de las Propiedades de STORYPLACE o tomar cualquier medida que imponga o pueda imponer (a la entera y absoluta discreción de STORYPLACE) una carga irrazonable o desproporcionadamente grande en la infraestructura de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Eludir los encabezados de exclusión de robots u otras medidas que STORYPLACE tome para restringir el acceso a las Propiedades de STORYPLACE, o utilizar cualquier software, tecnología o dispositivo para enviar contenido o mensajes, extraer, arañar o rastrear las Propiedades de STORYPLACE, o recopilar o manipular datos;</strong>
                            </li>
                            <li>
                                <strong>Utilizar, facilitar, crear o mantener cualquier conexión no autorizada a las Propiedades de STORYPLACE, lo que incluye, entre otros: (i) cualquier conexión a un servidor no autorizado que emule o intente emular cualquier parte de las Propiedades de STORYPLACE; o (ii) cualquier conexión que utilice programas, herramientas o software no aprobados expresamente (por escrito) por STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Realizar ingeniería inversa, descompilar, desensamblar, descifrar o intentar obtener de cualquier otro modo el código fuente de cualquier software subyacente u otra propiedad intelectual utilizada para proporcionar las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Falsificar los encabezados o manipular de otro modo los identificadores para ocultar el origen de cualquier contenido transmitido a través de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Cargar, publicar, enviar por correo electrónico, transmitir o poner a disposición de otro modo cualquier material que contenga virus de software o cualquier otro código, archivo o programa informático diseñado para interrumpir, destruir o limitar la funcionalidad de cualquier software o hardware de computadora o equipo de telecomunicaciones;</strong>
                            </li>
                            <li>
                                <strong>Solicitar o intentar solicitar información personal de otros usuarios registrados de las Propiedades de STORYPLACE;</strong>
                            </li>
                            <li>
                                <strong>Utilizar las Propiedades de STORYPLACE para recoger, recopilar, transmitir, distribuir, publicar o enviar cualquier información relativa a cualquier otra persona o entidad, incluyendo, sin limitación, fotografías de otras personas sin su permiso, información de contacto personal o números de crédito, débito, tarjeta telefónica, tarjeta de crédito u otros números de cuenta;</strong>
                            </li>
                            <li>
                                <strong>Falsificar cualquier encabezado de paquete TCP/IP o cualquier parte de la información del encabezado de cualquier publicación de correo electrónico o grupo de noticias, o utilizar de alguna manera las Propiedades de STORYPLACE para enviar información de identificación de la fuente alterada, engañosa o falsa; o</strong>
                            </li>
                            <li>
                                <strong>Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, GIF transparentes, píxeles 1x1, web bugs, cookies u otros dispositivos similares (a veces denominados «spyware», «mecanismos de recopilación pasiva» o «pcms»).</strong>
                            </li>
                        </ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>General</strong>
                            </span>
                            <strong>. En relación con el uso de las Propiedades de STORYPLACE, no deberá:</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>Poner a disposición cualquier Contenido que, a la entera y absoluta discreción de STORYPLACE, se determine que (i) es ilegal, doloso, difamatorio, vulgar, obsceno, calumnioso o censurable desde el punto de vista racial, étnico o de otro modo; (ii) infrinja o fomente cualquier conducta que infrinja cualquier ley o reglamento aplicable o que dé lugar a responsabilidad civil o penal; (iii) promueva la discriminación, la intolerancia, el racismo, el odio o el acoso o daño contra cualquier individuo o grupo; (iv) es violento o amenazante, o promueve la violencia o acciones que supongan una amenaza para cualquier otra persona o empresa; o (v) promueva actividades ilegales o dañinas;</strong>
                            </li>
                            <li>
                                <strong>Dañar a los menores de cualquier manera;</strong>
                            </li>
                            <li>
                                <strong>Hacerse pasar por cualquier persona o entidad, incluido, entre otros, el personal de STORYPLACE, o declarar falsamente o tergiversar de otro modo su afiliación con una persona o entidad;</strong>
                            </li>
                            <li>
                                <strong>Poner a Disposición cualquier Contenido que no tenga derecho a publicar en virtud de ninguna ley o en virtud de relaciones contractuales o fiduciarias (como información privilegiada, información confidencial y de propiedad exclusiva obtenida o divulgada como parte de relaciones laborales o en virtud de acuerdos de confidencialidad);</strong>
                            </li>
                            <li>
                                <strong>Poner a Disposición cualquier Contenido que infrinja los derechos de cualquier persona o entidad, incluidos, entre otros, cualquier patente, marca registrada, secreto comercial, derechos de autor, privacidad, publicidad u otros derechos de propiedad o contractuales;</strong>
                            </li>
                            <li>
                                <strong>Violar intencional o involuntariamente cualquier ley o reglamento local, estatal, nacional o internacional aplicable, o cualquier orden de un tribunal;</strong>
                            </li>
                            <li>
                                <strong>Registrar más de una cuenta o crear una Cuenta en nombre de una persona que no sea usted;</strong>
                            </li>
                            <li>
                                <strong>Acechar o acosar de cualquier otro modo a cualquier otro Usuario Registrado de nuestras Propiedades de STORYPLACE; o</strong>
                            </li>
                            <li>
                                <strong>Abogar, alentar o ayuda a cualquier tercero a realizar cualquiera de las actividades anteriores en esta sección.</strong>
                            </li>
                        </ol>
                    </ol>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Investigaciones</strong>
                            </span>
                            <strong>.</strong>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <strong>STORYPLACE puede, pero no está obligada a, monitorear o revisar las Propiedades y el Contenido de STORYPLACE en cualquier momento. Sin perjuicio de lo anterior, STORYPLACE tendrá el derecho, a su entera discreción, de eliminar cualquier parte de Su Contenido por cualquier motivo (o sin motivo), incluidos, entre otros, si dicho Contenido infringe el Acuerdo o cualquier ley aplicable. Si bien STORYPLACE no suele supervisar la actividad de los usuarios en relación con las Propiedades o el Contenido de STORYPLACE, si STORYPLACE tiene conocimiento de cualquier posible infracción por su parte de alguna disposición del Acuerdo, STORYPLACE se reserva el derecho de investigar dichas infracciones y STORYPLACE podrá, a su entera y absoluta discreción, rescindir inmediatamente su licencia de uso de las Propiedades de STORYPLACE o cambiar, alterar o eliminar, durante cualquier período de tiempo, Su Contenido, total o parcialmente, sin previo aviso.</strong>
                        </li>
                    </ol>
                    <ol>
                        <li>
                            <strong>Interacciones con otros usuarios.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Responsabilidad del usuario</strong>
                                </span>
                                <strong>. Usted es el único responsable de sus interacciones con otros Usuarios Registrados y cualquier otra parte con la que interactúe en o a través de las Propiedades de STORYPLACE. STORYPLACE se reserva el derecho, pero no tiene la obligación, de interceder en dichas controversias. Usted acepta que STORYPLACE no tendrá ninguna responsabilidad legal o de cualquier otra índole en la que incurra como resultado de dichas interacciones, incluidas, entre otras, las interacciones entre los Creadores de Contenido. USTED REALIZA TODAS LAS INTERACCIONES CON CUALQUIER OTRO USUARIO ÚNICAMENTE POR SU CUENTA Y RIESGO, Y STORYPLACE SE EXIME DE TODA RESPONSABILIDAD EN RELACIÓN CON ELLO. ADEMÁS, STORYPLACE SE EXIME DE TODA RESPONSABILIDAD EN RELACIÓN CON CUALQUIER DISPUTA ENTRE LOS USUARIOS DE NUESTROS SERVICIOS, INCLUIDA CUALQUIER DISPUTA RELACIONADA CON LAS HISTORIAS, EL ACCESO A LAS HISTORIAS, LA PRESENTACIÓN DE IDEAS, LA INFORMACIÓN INTERCAMBIADA ENTRE LOS USUARIOS Y CUALQUIER RESPONSABILIDAD RELACIONADA CON CUALQUIER DISCUSIÓN O ACUERDO ENTRE LOS CREADORES DE CONTENIDO Y LOS USUARIOS, INCLUIDOS, ENTRE OTROS, LOS RELACIONADOS CON LA COMPRA, LA ADQUISICIÓN, EL DESARROLLO, LA PRODUCCIÓN, LA DISTRIBUCIÓN Y/O LA EXPLOTACIÓN DE CONTENIDO. ADEMÁS, USTED RECONOCE Y ACEPTA QUE STORYPLACE NO ELABORA PERFILES NI VERIFICA NINGÚN TIPO DE USUARIO, INCLUIDAS BÚSQUEDAS DE ANTECEDENTES PENALES. STORYPLACE NO HACE DECLARACIONES NI GARANTIZA LA CONDUCTA DE NINGÚN USUARIO NI LA COMPATIBILIDAD DE NINGÚN USUARIO CON NINGÚN OTRO USUARIO ACTUAL O FUTURO.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Contenido proporcionado por otros usuarios</strong>
                                </span>
                                <strong>. Las Propiedades de STORYPLACE pueden contener Contenido de Usuario proporcionado por otros Usuarios Registrados. STORYPLACE no es responsable ni controla el Contenido del Usuario. STORYPLACE no tiene la obligación de revisar ni supervisar, y no aprueba, respalda ni ofrece ninguna declaración o garantía con respecto al Contenido del Usuario ni a ningún contenido no generado por STORYPLACE. Usted utiliza todo el Contenido del Usuario e interactúa con otros usuarios bajo su propio riesgo.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Servicios y tarifas de terceros.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Sitios web, aplicaciones y anuncios de terceros</strong>
                                </span>
                                <strong>. Las Propiedades de STORYPLACE pueden contener enlaces a sitios web de terceros («Sitios Web de Terceros») y aplicaciones («Aplicaciones de Terceros») y anuncios de terceros («Anuncios de Terceros»). Al hacer clic en un enlace a un Sitio Web de Terceros, una Aplicación de Terceros o un Anuncio de Terceros, no le avisaremos que ha abandonado las Propiedades de STORYPLACE y que está sujeto a los términos y condiciones (incluidas las políticas de privacidad) de otro sitio web o destino. Dichos Sitios Web de Terceros, Aplicaciones de Terceros y Anuncios de Terceros no están bajo el control de STORYPLACE. STORYPLACE no es responsable de ningún Sitios web de terceros, Aplicaciones de terceros o Anuncios de terceros. STORYPLACE proporciona estos Sitios Web de Terceros, Aplicaciones de Terceros y Anuncios de Terceros únicamente para su comodidad y no respalda, revisa, aprueba, monitorea, garantiza ni hace ninguna declaración con respecto a los Sitios Web de Terceros, Aplicaciones de Terceros y Anuncios de Terceros, ni ningún producto o servicio proporcionado en relación con los mismos. Usted utiliza todos los enlaces de Sitios Web de Terceros, Aplicaciones de Terceros y Anuncios de Terceros por su propia cuenta y riesgo. Cuando abandona nuestro Sitio web, el Acuerdo y las políticas dejan de regir. Debe revisar los términos y políticas aplicables, incluidas las prácticas de privacidad y recopilación de datos, de los Sitios web de Terceros o Aplicaciones de Terceros, y se le recomienda que realice las investigaciones que considere necesarias o apropiadas antes de continuar con cualquier transacción con un tercero.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Tiendas de aplicaciones</strong>
                                </span>
                                <strong>. Usted reconoce y acepta que la disponibilidad de la Aplicación y los Servicios depende del tercero del que haya recibido la licencia de la Aplicación, por ejemplo, la Tienda de Aplicaciones de Apple o Google Play (cada una de ellas, una «Tienda de Aplicaciones»). Usted reconoce que el Acuerdo es entre usted y STORYPLACE y no con una Tienda de Aplicaciones. STORYPLACE, no una Tienda de Aplicaciones, es la única responsable de las Propiedades de STORYPLACE, incluida la Aplicación, Su Contenido, el mantenimiento, los servicios de soporte y la garantía de estas, y de abordar cualquier reclamación relacionada con estas (por ejemplo, el cumplimiento legal o la infracción de la propiedad intelectual). Para acceder a la Aplicación, debe tener acceso a una red inalámbrica y se compromete a pagar todas las tarifas asociadas a dicho acceso. También acepta pagar todas las tarifas (si las hubiera) que cobre una Tienda de Aplicaciones en relación con las Propiedades de STORYPLACE, incluidas las relacionadas con la Aplicación, si las hubiera. Usted acepta cumplir con la Aplicación y su licencia de uso está condicionada a que cumpla con todos los términos del acuerdo impuestos por la Tienda de Aplicaciones correspondiente al utilizar cualquier Propiedad de STORYPLACE, incluida, entre otros, la Aplicación. Usted reconoce que la Tienda de Aplicaciones (y sus subsidiarias) son terceros beneficiarios del Acuerdo y tendrán el derecho de hacerlo cumplir.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Impuesto sobre las ventas</strong>
                                </span>
                                <strong>. STORYPLACE no cobra actualmente ninguna tarifa por ninguno de sus Servicios. Si en algún momento en el futuro, STORYPLACE comienza a cobrar una tarifa por alguno de sus Servicios, Servicios Complementarios u otros («Tarifas Adicionales»), las Tarifas Adicionales no incluirán ningún impuesto sobre las ventas que pueda adeudarse en relación con dichos Servicios antes mencionados. Si STORYPLACE determina que tiene la obligación legal de cobrarle el impuesto sobre las ventas u otro impuesto gubernamental en relación con este Acuerdo, STORYPLACE recaudará dicho impuesto sobre las ventas u otro impuesto gubernamental, además de las Tarifas y cualquier Tarifa Adicional (si la hubiera). Si alguno de los Servicios, o el pago de cualquier Servicio, en virtud del Acuerdo están sujetos al impuesto sobre las ventas en cualquier jurisdicción y usted no ha remitido el impuesto sobre las ventas aplicable a STORYPLACE, usted será responsable del pago de dicho impuesto sobre las ventas (incluidos otros impuestos gubernamentales) y de cualquier penalización o interés relacionados con STORYPLACE y otros, e indemnizará a STORYPLACE et al., por toda responsabilidad y gasto en que STORYPLACE y otros pueda incurrir en relación con ello. A petición de STORYPLACE, usted le proporcionará los recibos oficiales emitidos por la autoridad tributaria correspondiente u otra prueba similar de que ha pagado todos los impuestos aplicables. A los efectos de esta sección, por «Impuesto sobre las ventas» se entenderá cualquier impuesto sobre las ventas y/o el uso y/o cualquier otro impuesto medido por los ingresos de las ventas que sea el equivalente funcional de un impuesto sobre las ventas, cuando la jurisdicción fiscal aplicable no imponga de otro modo un impuesto sobre las ventas o el uso.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Usted se compromete a indemnizar, defender y eximir a STORYPLACE, sus sociedades matrices, subsidiarias, filiales, accionistas, directivos, empleados, agentes, abogados, socios, proveedores y licenciantes (cada una, una «Parte de STORYPLACE» y, colectivamente, las «Partes de STORYPLACE») de cualquier pérdida, coste, responsabilidad legal y gasto (incluidos los honorarios razonables de los abogados y los costes de los testigos expertos) relacionados o derivados de cualquiera de los siguientes: (a) Su Contenido, incluida cualquier demanda, reclamación o acción de otro Usuario Registrado o cualquier otro tercero que alegue que Su Contenido infrinja cualquier derecho, incluidos los derechos de propiedad intelectual, derechos de autor y privacidad; (b) cualquier demanda, reclamación o acción relacionada con el uso de nuestros Servicios interpuesta contra cualquier Parte de STORYPLACE, incluida, entre otras, cualquier demanda, reclamación o acción de un usuario, tercero y/o creador de contenido que alegue (i) robo de ideas, (ii) incumplimiento de un contrato implícito o (iii) infracción de propiedad intelectual o derechos de autor; (c) cualquier demanda, reclamación o acción de otra persona Usuario Registrado o cualquier otro tercero que alegue que Su Contenido es difamatorio; (d) su uso de, o incapacidad de utilizar cualquier propiedad de STORYPLACE; (e) su violación del Acuerdo; (f) su violación de cualquier derecho de otra parte, incluidos, entre otros, los Usuarios registrados; o (g) su violación de cualquier ley, norma o reglamento aplicable. STORYPLACE se reserva el derecho, a su propia costa, de asumir la defensa y el control exclusivos de cualquier asunto que de otro modo esté sujeto a una indemnización por su parte, en cuyo caso usted cooperará plenamente con STORYPLACE en hacer valer cualquier defensa disponible, sin que STORYPLACE renuncie a ninguno de los derechos de indemnización que se le adeudan a STORYPLACE. Usted acepta que las disposiciones de esta sección seguirán vigentes después de la terminación de su Cuenta, del Acuerdo o de su acceso a las Propiedades de STORYPLACE.</strong>
                        </li>
                        <li>
                            <strong>Exención de garantías y condiciones.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Tal cual.</strong>
                                </span>
                                <strong>
                                    USTED ENTIENDE Y ACEPTA EXPRESAMENTE QUE, EN LA MEDIDA EN QUE LO PERMITA LA LEY APLICABLE, EL USO QUE HAGA DE LAS PROPIEDADES DE STORYPLACE CORRE POR SU CUENTA Y RIESGO, Y QUE LAS PROPIEDADES DE STORYPLACE SE PROPORCIONAN «TAL CUAL» Y «SEGÚN SU DISPONIBILIDAD», CON TODOS SUS DEFECTOS. LAS PARTES DE STORYPLACE RENUNCIAN EXPRESAMENTE A TODAS LAS GARANTÍAS, DECLARACIONES Y CONDICIONES DE CUALQUIER TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS O CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO INFRACCIÓN QUE SURJAN DEL USO DEL SITIO WEB.&nbsp;</strong>
                            </li>
                            <ol>
                                <li>
                                    <strong>LAS PARTES DE STORYPLACE NO GARANTIZAN, DECLARAN NI CONDICIONAN QUE: (1) LAS PROPIEDADES DE STORYPLACE CUMPLIRÁN CON SUS REQUISITOS O EXPECTATIVAS; (2) SU USO DE LAS PROPIEDADES DE STORYPLACE SERÁ ININTERRUMPIDO, PUNTUAL, SEGURO O LIBRE DE ERRORES; O (3) LOS RESULTADOS QUE SE PUEDAN OBTENER DEL USO DE LAS PROPIEDADES DE STORYPLACE SERÁN PRECISOS O CONFIABLES.</strong>
                                </li>
                                <li>
                                    <strong>EL ACCESO A CUALQUIER CONTENIDO DESCARGADO DE STORYPLACE O AL QUE SE ACCEDA DE CUALQUIER OTRA FORMA A TRAVÉS DE ESTE SE REALIZA POR SU CUENTA Y RIESGO, Y USTED SERÁ EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO A SU PROPIEDAD, INCLUIDOS, ENTRE OTROS, SU SISTEMA INFORMÁTICO Y CUALQUIER DISPOSITIVO QUE UTILICE PARA ACCEDER A LAS PROPIEDADES DE STORYPLACE, O DE CUALQUIER OTRA PÉRDIDA QUE RESULTE DEL ACCESO A DICHO CONTENIDO.&nbsp;</strong>
                                </li>
                                <li>
                                    <strong>LOS SERVICIOS PUEDEN ESTAR SUJETOS A RETRASOS, CANCELACIONES Y OTRAS INTERRUPCIONES. STORYPLACE NO OFRECE NINGUNA GARANTÍA, DECLARACIÓN O CONDICIÓN CON RESPECTO A LOS SERVICIOS, INCLUIDAS, ENTRE OTRAS, LA CALIDAD, LA EFICACIA, LA REPUTACIÓN Y OTRAS CARACTERÍSTICAS DE LOS SERVICIOS.</strong>
                                </li>
                                <li>
                                    <strong>NINGÚN CONSEJO O INFORMACIÓN, YA SEA ORAL O ESCRITA, OBTENIDO DE STORYPLACE O A TRAVÉS DE LAS PROPIEDADES DE STORYPLACE GENERARÁ NINGUNA GARANTÍA QUE NO ESTÉ EXPRESAMENTE ESTIPULADA EN ESTE DOCUMENTO.</strong>
                                </li>
                                <li>
                                    <strong>De vez en cuando, STORYPLACE puede ofrecer nuevas funciones o herramientas «beta» con las que los usuarios registrados pueden experimentar. Dichas funciones o herramientas se ofrecen únicamente con fines experimentales y sin garantía
                                    </strong>
                                    <span style={{ textDecoration: "underline" }}>
                                        <strong>de ningún tipo</strong>
                                    </span>
                                    <strong>, y pueden modificarse o discontinuarse a la entera y absoluta discreción de STORYPLACE. Las disposiciones de esta sección se aplican con plena vigencia a dichas funciones o herramientas.</strong>
                                </li>
                            </ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Descargo de responsabilidad por la conducta de terceros</strong>
                                </span>
                                <strong>. USTED RECONOCE Y ACEPTA QUE LAS PARTES DE STORYPLACE NO SON RESPONSABLES Y SE COMPROMETE A NO PRETENDER RESPONSABILIZAR A LAS PARTES DE STORYPLACE POR LA CONDUCTA DE TERCEROS, INCLUIDOS LOS OPERADORES DE SITIOS EXTERNOS, Y QUE EL RIESGO DE LESIONES POR PARTE DE DICHOS TERCEROS RECAE EXCLUSIVAMENTE EN USTED.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Descargo de responsabilidad por la conducta de otros usuarios</strong>
                                </span>
                                <strong>. USTED ES EL ÚNICO RESPONSABLE DE TODAS SUS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE. USTED COMPRENDE QUE STORYPLACE NO INTENTA VERIFICAR LAS DECLARACIONES DE LOS USUARIOS DE LAS PROPIEDADES DE STORYPLACE. STORYPLACE NO HACE DECLARACIONES NI GARANTIZA LA CONDUCTA DE LOS USUARIOS DE LAS PROPIEDADES DE STORYPLACE NI SU COMPATIBILIDAD CON LOS USUARIOS ACTUALES O FUTUROS DE LAS PROPIEDADES DE STORYPLACE. USTED SE COMPROMETE A TOMAR PRECAUCIONES RAZONABLES EN TODAS LAS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE, ESPECIALMENTE SI DECIDE REUNIRSE FUERA DE LÍNEA O EN PERSONA. USTED RECONOCE Y ACEPTA QUE STORYPLACE NO VERIFICA LOS ANTECEDENTES DE NINGÚN USUARIO.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Descargo de responsabilidad por la conducta de los usuarios de PRO</strong>
                                </span>
                                <strong>. SI ES UN USUARIO, ES EL ÚNICO RESPONSABLE DE TODAS SUS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS, INCLUIDAS, ENTRE OTRAS, LAS INTERACCIONES RELACIONADAS CON CUALQUIER HISTORIA, EL ACCESO A DICHAS HISTORIAS Y SU PRESENTACIÓN, Y CUALQUIER COMUNICACIÓN O ACUERDO RELACIONADO (PERO SIN LIMITARSE A) LA ADQUISICIÓN DE CUALQUIER DERECHO, TÍTULO O INTERÉS EN DICHAS HISTORIAS.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Limitación de responsabilidad.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Descargo de responsabilidad por ciertos daños</strong>
                                </span>
                                <strong>. USTED ENTIENDE Y ACEPTA QUE, EN NINGÚN CASO, LAS PARTES DE STORYPLACE SERÁN RESPONSABLES DE NINGUNA PÉRDIDA DE BENEFICIOS, INGRESOS O DATOS, DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES, NI DE LOS DAÑOS O COSTOS DEBIDOS A LA PÉRDIDA DE PRODUCCIÓN O USO, LA INTERRUPCIÓN DE LA ACTIVIDAD COMERCIAL, LA ADQUISICIÓN DE BIENES O SERVICIOS SUSTITUTIVOS, EN CUALQUIER CASO, INDEPENDIENTEMENTE DE QUE STORYPLACE HAYA SIDO INFORMADA O NO DE LA POSIBILIDAD DE DICHOS DAÑOS, QUE SURJAN O ESTÉN RELACIONADOS CON EL ACUERDO O CUALQUIER COMUNICACIÓN, INTERACCIÓN O REUNIÓN CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE, SEGÚN CUALQUIER TEORÍA DE LA RESPONSABILIDAD LEGAL, RESULTANDO DE: (1) EL USO O LA IMPOSIBILIDAD DE USAR LAS PROPIEDADES DE STORYPLACE; (2) EL COSTO DE ADQUISICIÓN DE BIENES O SERVICIOS SUSTITUTIVOS RESULTANTE DE CUALQUIER BIEN, DATO, INFORMACIÓN O SERVICIO COMPRADO U OBTENIDO O DE LOS MENSAJES RECIBIDOS POR TRANSACCIONES REALIZADAS A TRAVÉS DE LAS PROPIEDADES DE STORYPLACE; (3) EL ACCESO NO AUTORIZADO O LA ALTERACIÓN DE SUS TRANSMISIONES O DATOS; (4) LAS DECLARACIONES O LA CONDUCTA DE CUALQUIER TERCERO SOBRE LAS PROPIEDADES DE STORYPLACE; O (5) CUALQUIER OTRO ASUNTO RELACIONADO CON LAS PROPIEDADES DE STORYPLACE, YA BASADO EN LA GARANTÍA, LOS DERECHOS DE AUTOR, EL CONTRATO, LA RESPONSABILIDAD EXTRACONTRACTUAL (INCLUIDA LA NEGLIGENCIA) Y LA RESPONSABILIDAD POR PRODUCTOS DEFECTUOSOS O CUALQUIER OTRA TEORÍA JURÍDICA. LA LIMITACIÓN DE RESPONSABILIDAD ANTERIOR NO SE APLICARÁ A LA RESPONSABILIDAD DE UNA PARTE DE STORYPLACE POR (A) LA MUERTE O LAS LESIONES PERSONALES CAUSADAS POR UNA NEGLIGENCIA GRAVE DE UNA PARTE DE STORYPLACE; NI A (B) NINGUNA LESIÓN CAUSADA POR UN FRAUDE O TERGIVERSACIÓN FRAUDULENTA DE UNA PARTE DE STORYPLACE</strong>
                                <strong>.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Límite de responsabilidad</strong>
                                </span>
                                <strong>. BAJO NINGUNA CIRCUNSTANCIA, LAS PARTES DE STORYPLACE SERÁN RESPONSABLES ANTE USTED
                                </strong>
                                <strong>(INCLUIDOS TODOS LOS HONORARIOS Y COSTOS LEGALES Y DE COBRANZA)
                                </strong>
                                <strong>POR UNA CANTIDAD SUPERIOR A (A) LA CANTIDAD TOTAL PAGADA A STORYPLACE por usted durante el período de un mes anterior al acto, omisión o suceso que dé lugar a dicha responsabilidad y (B) EL RECURSO O LA SANCIÓN IMPUESTOS POR LA LEY EN VIRTUD DEL CUAL SURJA DICHA DEMANDA.&nbsp; EL LÍMITE DE RESPONSABILIDAD ANTERIOR NO SE APLICARÁ A LA RESPONSABILIDAD DE UNA PARTE DE STORYPLACE POR (A) LA MUERTE O LAS LESIONES PERSONALES CAUSADAS POR LA NEGLIGENCIA GRAVE DE UNA PARTE DE STORYPLACE; NI POR (B) NINGUNA LESIÓN CAUSADA POR EL FRAUDE O LA TERGIVERSACIÓN FRAUDULENTA DE UNA PARTE DE STORYPLACE.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Contenido del usuario</strong>
                                </span>
                                <strong>. A EXCEPCIÓN DE LAS OBLIGACIONES DE STORYPLACE DE PROTEGER SUS DATOS PERSONALES, TAL COMO SE ESTABLECE EN LA
                                </strong>
                                <a target="_blank" href="https://www.storyplace.com/espanol/privacy" rel="noreferrer">
                                    <strong>POLÍTICA DE PRIVACIDAD</strong>
                                </a>
                                <strong>
                                    DE STORYPLACE, STORYPLACE NO ASUME NINGUNA RESPONSABILIDAD POR LA PUNTUALIDAD, LA ELIMINACIÓN, LA ENTREGA INCORRECTA O LA FALTA DE ALMACENAMIENTO DE NINGÚN CONTENIDO (INCLUIDOS, ENTRE OTROS, SU CONTENIDO Y CONTENIDO DEL USUARIO), LAS COMUNICACIONES DE LOS USUARIOS Y/O LA CONFIGURACIÓN DE PERSONALIZACIÓN.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Base de la negociación</strong>
                                </span>
                                <strong>. LAS LIMITACIONES DE LOS DAÑOS EXPUESTAS ANTERIORMENTE SON ELEMENTOS FUNDAMENTALES DE LA BASE DE LA NEGOCIACIÓN ENTRE STORYPLACE Y USTED.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Procedimiento para presentar demandas por infracción de derechos de autor. La política de STORYPLACE consiste en anular los privilegios de membresía de cualquier Usuario Registrado que infrinja reiteradamente los derechos de autor tras una notificación inmediata a STORYPLACE por parte del propietario de los derechos de autor o del representante legal del propietario de los derechos de autor. Sin perjuicio de lo anterior, si cree que su obra ha sido copiada y publicada en las Propiedades de STORYPLACE de una manera que constituye una infracción de derechos de autor, proporcione a nuestro agente de derechos de autor la siguiente información: (a) una firma electrónica o física de la persona autorizada a actuar en nombre del propietario de los derechos de autor; (b) una descripción de la obra protegida por derechos de autor que afirma que se ha infringido; (c) una descripción de la ubicación en las Propiedades de STORYPLACE del material que, según usted, infringe; (d) su dirección, número de teléfono y dirección de correo electrónico; (e) una declaración escrita suya en la que afirme que cree de buena fe que el uso en controversia no está autorizado por el propietario de los derechos de autor, su agente o la ley; y (f) una declaración suya, hecha bajo pena de perjurio, de que la información anterior de su aviso es precisa y que usted es el propietario de los derechos de autor o está autorizado a actuar en nombre del propietario de los derechos de autor. La información de contacto del Agente de derechos de autor de STORYPLACE para la notificación de demandas por infracción de derechos de autor es la siguiente: StoryPlace HQ,
                            </strong>
                            <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Infracciones</strong>
                                </span>
                                <strong>. Si STORYPLACE se entera de cualquier posible infracción por su parte del Acuerdo, STORYPLACE se reserva el derecho de investigar dichas infracciones. Si, como resultado de la investigación, STORYPLACE cree que se ha producido una actividad delictiva, STORYPLACE se reserva el derecho de remitir el asunto a todas y cada una de las autoridades legales aplicables y de cooperar con ellas. STORYPLACE tiene derecho, excepto en la medida en que lo prohíba la ley aplicable, a divulgar cualquier información o material sobre o en las Propiedades de STORYPLACE, incluido Su Contenido, en poder de STORYPLACE en relación con su uso de las Propiedades de STORYPLACE, para (a) cumplir con las leyes aplicables, los procesos legales o las solicitudes gubernamentales; (b) hacer cumplir las condiciones, (c) responder a cualquier afirmación de que Su Contenido infringe los derechos de terceros, (d) responder a sus solicitudes de servicio al cliente, o (e) proteger los derechos, la propiedad o la seguridad personal de STORYPLACE, sus usuarios o el público y todos los funcionarios encargados de hacer cumplir la ley u otros funcionarios gubernamentales, según STORYPLACE considere necesario o apropiado, a su entera y absoluta discreción.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Incumplimiento</strong>
                                </span>
                                <strong>. En caso de que STORYPLACE determine, a su entera y absoluta discreción, que usted ha incumplido alguna parte del Acuerdo o que ha demostrado de otro modo una conducta inapropiada para las Propiedades de STORYPLACE, STORYPLACE se reserva el derecho de:</strong>
                            </li>
                            <ol>
                                <li>
                                    <strong>Advertirle por correo electrónico (a cualquier dirección de correo electrónico que haya proporcionado a STORYPLACE) de que ha infringido el Acuerdo;</strong>
                                </li>
                                <li>
                                    <strong>Eliminar cualquier parte de Su Contenido proporcionado por usted o su(s) agente(s) a las Propiedades de STORYPLACE;</strong>
                                </li>
                                <li>
                                    <strong>Interrumpir su registro en cualquiera de las Propiedades de STORYPLACE, incluidos los Servicios o cualquier comunidad de STORYPLACE;</strong>
                                </li>
                                <li>
                                    <strong>Interrumpir su suscripción a cualquier Servicio;</strong>
                                </li>
                                <li>
                                    <strong>Notificar y/o enviar Contenido a las autoridades policiales correspondientes y/o cooperar plenamente con ellas para tomar medidas adicionales; y/o</strong>
                                </li>
                                <li>
                                    <strong>Realizar cualquier otra acción que STORYPLACE considere apropiada.</strong>
                                </li>
                            </ol>
                        </ol>
                        <li>
                            <strong>Vigencia y terminación.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Vigencia.</strong>
                                </span>
                                <strong>
                                    El Acuerdo comienza en la fecha en que usted lo acepta (tal como se describe anteriormente) y permanece en pleno vigor y efecto mientras utilice las Propiedades de STORYPLACE, a menos que se rescinda antes, de conformidad con el Acuerdo, al tiempo que garantiza, acepta y reconoce que ciertas disposiciones que se le deban a STORYPLACE, tal como se estipula en este documento, sobrevivirán a dicha terminación o vencimiento.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Uso previo</strong>
                                </span>
                                <strong>. Sin perjuicio de lo anterior, por la presente reconoce y acepta que el Acuerdo comenzó en la primera de las siguientes fechas: (a) la fecha en que utilizó por primera vez las Propiedades de STORYPLACE o (b) la fecha en que aceptó el Acuerdo, permanecerá en pleno vigor y efecto mientras utilice cualquier Propiedad de STORYPLACE, a menos que se rescinda antes de conformidad con el Acuerdo, al tiempo que garantiza, acepta y reconoce que ciertas disposiciones que se le deban a STORYPLACE, tal como se estipula en este documento, sobrevivirán a dicha terminación o vencimiento.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Terminación de los servicios por usted</strong>
                                </span>
                                <strong>
                                    Si desea cancelar los Servicios proporcionados por STORYPLACE, puede hacerlo (a) notificándolo a STORYPLACE en cualquier momento y (b) cerrando su Cuenta para todos los Servicios que utiliza. Su notificación debe enviarse por escrito a la dirección de STORYPLACE que figura a continuación</strong>
                                <strong>,
                                </strong>
                                <strong>si bien las partes acuerdan que ciertas disposiciones estipuladas en este documento que se le deban a STORYPLACE seguirán vigentes después de dicha terminación o vencimiento.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Efecto de la terminación</strong>
                                </span>
                                <strong>. La terminación de cualquier Servicio incluye (pero no se limita a) la eliminación del acceso a dicho Servicio y la prohibición de su uso posterior. La terminación de todos los Servicios también incluye la eliminación de su contraseña y de toda la información, los archivos y el contenido relacionados con o dentro de su Cuenta (o cualquier parte de esta), incluido Su Contenido (a la entera y absoluta discreción de STORYPLACE). Tras la terminación de cualquier Servicio, su derecho a utilizar dicho Servicio finalizará automáticamente de forma inmediata, al tiempo que garantiza, acepta y reconoce que determinadas disposiciones adeudadas a STORYPLACE, tal como se estipula en este documento, seguirán vigentes tras dicha terminación o vencimiento.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Uso previo</strong>
                                </span>
                                <strong>. Sin perjuicio de lo anterior, usted reconoce que cualquier terminación de los Servicios puede implicar la eliminación de su Contenido asociado a los mismos de nuestras bases de datos activas. STORYPLACE no tendrá ninguna responsabilidad ante usted por cualquier suspensión o terminación, incluida la eliminación de Su Contenido. Todas las disposiciones del Acuerdo que, por su naturaleza, deban sobrevivir, seguirán vigentes después de la terminación de los Servicios, incluidas, entre otras, las disposiciones de propiedad, la indemnización, las exenciones de garantía y la limitación de responsabilidad,
                                </strong>
                                <strong>y se aplicarán en todo el presente Acuerdo.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Sin registro posterior</strong>
                                </span>
                                <strong>. Si STORYPLACE interrumpe su registro o la posibilidad de acceder a las Propiedades de STORYPLACE o a cualquier otra comunidad de STORYPLACE debido a la violación de cualquier parte del Acuerdo o por una conducta que de otro modo sea inapropiada para la comunidad, usted se compromete a no volver a registrarse en las Propiedades de STORYPLACE o a ninguna comunidad de STORYPLACE mediante el uso de un nombre de miembro diferente o de otro modo, y reconoce que no tendrá derecho a recibir ninguna contraprestación relacionada con esas Propiedades de STORYPLACE a las que su acceso ha sido cancelado. En caso de que usted infrinja la oración inmediatamente anterior, STORYPLACE se reserva el derecho, a su entera discreción, de tomar inmediatamente cualquiera o todas las medidas aquí establecidas sin previo aviso ni advertencia.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Usuarios internacionales. Se puede acceder a las Propiedades de STORYPLACE desde países de todo el mundo y pueden contener referencias a Servicios y Contenido que no están disponibles en su país. Estas referencias no implican que STORYPLACE tenga la intención de anunciar dichos Servicios o Contenido en su país. STORYPLACE controla y ofrece las Propiedades de STORYPLACE desde sus instalaciones en los Estados Unidos de América. STORYPLACE no garantiza que las Propiedades de STORYPLACE sean apropiadas o estén disponibles para su uso en otras ubicaciones. Quienes accedan a las Propiedades de STORYPLACE o las utilicen desde otros países lo hacen por su propia voluntad y son responsables del cumplimiento de la legislación local.</strong>
                        </li>
                        <li>
                            <strong>Solución de controversias.</strong>
                            <strong>
                                <em>
                                    Lea atentamente el siguiente acuerdo de arbitraje de esta sección («Acuerdo de Arbitraje»). Le exige que arbitre las controversias con STORYPLACE y limita la manera en que puede solicitarnos reparación.&nbsp;</em>
                            </strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Aplicabilidad del Acuerdo de Arbitraje</strong>
                                </span>
                                <strong>
                                    <em>.</em>
                                </strong>
                                <strong>
                                    Usted acepta que cualquier controversia o reclamación relacionada de alguna manera con su acceso o uso del Sitio Web, con cualquier producto vendido o distribuido a través del Sitio Web, o con cualquier aspecto de su relación con STORYPLACE, se resolverá mediante un arbitraje vinculante y no ante un tribunal, excepto que STORYPLACE podrá solicitar una reparación equitativa ante los tribunales por infracción u otro uso indebido de los derechos de propiedad intelectual (como marcas comerciales, imagen comercial, nombres de dominio, secretos comerciales, derechos de autor y patentes). Este Acuerdo de Arbitraje se aplicará, sin limitación, a todas las reclamaciones que hayan surgido o se hayan presentado antes de la fecha de entrada en vigor de este Acuerdo o de cualquier versión anterior de este Acuerdo.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Reglas de arbitraje y jurisdicción</strong>
                                </span>
                                <strong>
                                    <em>.
                                    </em>
                                </strong>
                                <strong>Todas las controversias que surjan del presente Acuerdo o estén relacionadas con él, incluida cualquier cuestión relacionada con su existencia, validez o terminación, se resolverán definitivamente con arreglo a las Reglas de Arbitraje
                                </strong>
                                <strong>del Condado de Los Ángeles, California, de conformidad con las Reglas y procedimientos de arbitraje simplificados de Judicial Arbitration and Mediation Services, Inc. («JAMS») en vigor en ese momento, por un árbitro comercial con una experiencia sustancial en la resolución de controversias de propiedad intelectual y contratos comerciales, que será seleccionado de la lista adecuada de árbitros de JAMS de acuerdo con las Reglas y Procedimientos de arbitraje simplificados de JAMS. La sentencia sobre el laudo así dictado podrá ser presentada ante un tribunal competente, o podrá solicitarse a dicho tribunal la aceptación judicial de cualquier laudo y una orden de ejecución, según sea el caso. Sin perjuicio de lo anterior, usted acepta renunciar a su derecho a solicitar o iniciar una acción ante un tribunal competente para obtener medidas cautelares u otro tipo de compensación equitativa y acepta limitar todos los recursos que pueda interponer a la indemnización por daños y perjuicios. A todos los efectos de estos Términos, usted acepta someterse a la jurisdicción y competencia exclusivas de los tribunales estatales o federales ubicados, respectivamente, en el condado de Los Ángeles, California. La parte que prevalezca en cualquier acción o proceso judicial que surja de estos Términos tendrá derecho a una compensación en concepto de costas y honorarios de abogados externos. En la medida en que lo permita la ley, usted y StoryPlace aceptan que todas las demandas contra la otra parte solo pueden presentarse a título individual y no como demandantes o miembros de grupo en ningún supuesto proceso judicial colectivo, consolidado u otro proceso judicial representativo. Usted acepta que los árbitros no pueden llevar a cabo ningún proceso judicial colectivo, consolidado o representativo, y se limitan a proporcionar las medidas que justifique la demanda de una parte individual.
                                </strong>
                                <strong>Sin perjuicio de lo establecido en el presente que indique lo contrario, la ejecución de cualquier laudo podrá solicitarse en cualquier tribunal de la jurisdicción competente.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Exención de juicio con jurado</strong>
                                </span>
                                <strong>. STORYPLACE Y USTED RENUNCIAN A CUALQUIER DERECHO CONSTITUCIONAL Y LEGAL A DEMANDAR ANTE UN TRIBUNAL Y A CELEBRAR UN JUICIO ANTE UN JUEZ O UN JURADO. En cambio, usted y STORYPLACE eligen que todas las demandas y controversias se resuelvan mediante arbitraje en virtud del presente Acuerdo. Un árbitro puede conceder de forma individual los mismos daños y reparaciones que un tribunal y debe cumplir este Acuerdo como lo haría un tribunal. Sin embargo, no hay juez ni jurado en el arbitraje, y la revisión judicial de un laudo arbitral está sujeta a una revisión muy limitada.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Renuncia a acciones colectivas u otras acciones no individualizadas.</strong>
                                </span>
                                <strong>
                                    TODAS LAS DEMANDAS Y CONTROVERSIAS QUE ENTREN EN EL ÁMBITO DE APLICACIÓN DEL PRESENTE ACUERDO DEBERÁN SOMETERSE A ARBITRAJE DE FORMA INDIVIDUAL Y NO COLECTIVA, SÓLO SE CONCEDERÁN INDEMNIZACIONES INDIVIDUALES, Y LAS DEMANDAS DE MÁS DE UN CLIENTE O USUARIO NO PODRÁN SOMETERSE A ARBITRAJE NI CONSOLIDARSE CON LAS DE NINGÚN OTRO CLIENTE O USUARIO. Si se emite una decisión en la que se declare que la ley aplicable impide la aplicación de cualquiera de las limitaciones de esta subsección en cuanto a una demanda de reparación determinada, la demanda debe separarse del arbitraje y presentarse ante los tribunales estatales o federales ubicados en el estado de California. Todas las demás demandas se someterán a arbitraje.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Derecho de exclusión de 30 días.</strong>
                                </span>
                                <strong>
                                    Usted tiene derecho a excluirse de las disposiciones de esta cláusula de arbitraje enviando una notificación por escrito de su decisión de excluirse a: support@storyplace.com, en un plazo de 30 días a partir de la fecha en que quede sujeto al presente Acuerdo. Su notificación debe incluir su nombre y dirección, su nombre de usuario de STORYPLACE (si lo hubiera), la dirección de correo electrónico que utilizó para configurar su cuenta de STORYPLACE (si tiene una) y una declaración inequívoca de que desea excluirse de esta disposición de arbitraje. Si opta por excluirse de esta disposición de arbitraje, todas las demás partes de este Acuerdo seguirán aplicándose a usted. La exclusión voluntaria de esta disposición de arbitraje no afectará a ningún otro acuerdo que pueda tener actualmente o que pueda celebrar en el futuro con nosotros.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Separabilidad.</strong>
                                </span>
                                <strong>
                                    <em></em>
                                </strong>
                                <strong>Si la ley determina que alguna parte o partes de este Acuerdo son inválidas o inaplicables, dicha parte o partes específicas no tendrán vigencia ni efecto y se separarán y el resto del Acuerdo continuará en pleno vigor y efecto.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Continuidad contractual del Acuerdo</strong>
                                </span>
                                <strong>
                                    <em>.
                                    </em>
                                </strong>
                                <strong>El presente Acuerdo seguirá vigente tras la terminación de su relación con STORYPLACE.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Modificación</strong>
                                </span>
                                <strong>. Sin perjuicio de cualquier disposición de este Acuerdo que indique lo contrario, aceptamos que, si STORYPLACE realiza algún cambio material en el futuro en este Acuerdo, usted podrá rechazar dicho cambio POR ESCRITO en un plazo de treinta (30) días a partir de la entrada en vigor de dicho cambio escribiendo a STORYPLACE a la siguiente dirección: Storyplace HQ,
                                </strong>
                                <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211</strong>
                                <strong>.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Disposiciones generales.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Comunicaciones electrónicas</strong>
                                </span>
                                <strong>. Las comunicaciones entre usted y STORYPLACE pueden realizarse por medios electrónicos, ya sea que visite las Propiedades de STORYPLACE o envíe correos electrónicos a STORYPLACE, o bien STORYPLACE publique avisos en las Propiedades de STORYPLACE o se comunique con usted por correo electrónico. A efectos contractuales, usted (a) acepta recibir comunicaciones de STORYPLACE en formato electrónico; y (b) acepta que todos los términos y condiciones, acuerdos, avisos, divulgaciones y otras comunicaciones que STORYPLACE le proporcione electrónicamente satisfacen cualquier requisito legal que dichas comunicaciones cumplirían si se realizaran por escrito. Lo anterior no afecta a sus derechos legales.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Exención de responsabilidad.</strong>
                                </span>
                                <strong>
                                    Por la presente, exime a las partes de STORYPLACE y a sus sucesores y cesionarios de cualquier reclamación, demanda, pérdida, daño, derecho y acción de cualquier tipo, incluidas las lesiones personales, la muerte y los daños a la propiedad, que estén relacionadas directa o indirectamente con su uso de las Propiedades de STORYPLACE o se deriven de ellas, incluidas, entre otras, las interacciones o la conducta de otros usuarios o sitios web de terceros de cualquier tipo que surja en relación con o como resultado del Acuerdo o su uso de las Propiedades de STORYPLACE. Si usted es residente de California, por la presente renuncia al artículo 1542 del Código Civil de California, que establece</strong>
                                <strong>
                                    <em>: «Una exención general no se extiende a las reclamaciones que el acreedor o la parte exonerante no conozca o sospeche que existen a su favor en el momento de ejecutar la exención y que, de saberlo, habrían afectado sustancialmente a su acuerdo con el deudor o la</em>
                                </strong>
                                <strong></strong>
                                <strong>
                                    <em>parte exonerada</em>
                                </strong>
                                <strong>».</strong>
                                <strong>
                                    <em></em>
                                </strong>
                                <strong>La declaración anterior no se aplica a ninguna reclamación, demanda ni a ninguna pérdida, daño, derecho o acción de ningún tipo, incluidas las lesiones personales, la muerte o los daños a la propiedad, por cualquier práctica comercial desmesurada por parte de una Parte de STORYPLACE o por fraude, engaño, falsa promesa, tergiversación u ocultación, supresión u omisión de cualquier hecho material por parte de dicha parte en relación con el Sitio web.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Cesión</strong>
                                </span>
                                <strong>. Usted no podrá ceder, subcontratar, delegar ni transferir de otro modo el Acuerdo ni sus derechos y obligaciones en virtud del presente documento sin el consentimiento previo por escrito de STORYPLACE, que se negará a su entera y absoluta discreción, y cualquier intento de cesión, subcontratación, delegación o transferencia que infrinja lo anterior se considerará inmediatamente nulo y sin efecto ab initio.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Fuerza mayor.</strong>
                                </span>
                                <strong>
                                    STORYPLACE no será responsable de ningún retraso o incumplimiento derivado de causas ajenas a su control razonable, incluidos, entre otros, casos fortuitos, guerras, terrorismo, disturbios, embargos, actos de las autoridades civiles o militares, incendios, inundaciones, pandemias, epidemias, accidentes, huelgas o escasez de medios de transporte, combustible, energía, mano de obra o materiales.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Preguntas, quejas, reclamos</strong>
                                </span>
                                <strong>. Si tiene alguna pregunta, queja o reclamo con respecto a las Propiedades de STORYPLACE, póngase en contacto con nosotros en: support@storyplace.com. Haremos todo lo posible para abordar sus inquietudes. Si considera que sus inquietudes no se han abordado de manera completa, lo invitamos a que nos lo comunique para investigar más a fondo.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Lugar exclusivo</strong>
                                </span>
                                <strong>. En la medida en que el presente Acuerdo permita a las partes iniciar un recurso, tanto usted como STORYPLACE acuerdan que todas las demandas y controversias que surjan del Acuerdo o estén relacionadas con él se desarrollarán exclusivamente en el condado de Los Ángeles (California).</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Ley aplicable y jurisdicción</strong>
                                </span>
                                <strong>. Los Términos de Uso y cualquier acción relacionada con los mismos se regirán e interpretarán por y bajo las leyes del Estado de California, de conformidad con
                                </strong>
                                <strong>las Reglas y procedimientos simplificados de Judicial Arbitration and Mediation Services, Inc. («JAMS») en vigor en ese momento</strong>
                                <strong>, sin dar efecto a ningún principio que prevea la aplicación de la ley de otra jurisdicción.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Elección de idioma</strong>
                                </span>
                                <strong>. Este Acuerdo, y cualquier contrato entre nosotros, están únicamente en inglés.&nbsp;</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Notificación</strong>
                                </span>
                                <strong>. Cuando STORYPLACE requiera que proporcione una dirección de correo electrónico, usted es responsable de proporcionar a STORYPLACE su dirección de correo electrónico más reciente. En caso de que la última dirección de correo electrónico que proporcionó a STORYPLACE no sea válida o, por cualquier motivo, no pueda enviarle las notificaciones exigidas o permitidas por el Acuerdo, el envío por parte de STORYPLACE del correo electrónico que contenga dicha notificación constituirá, no obstante, una notificación efectiva. Puede enviar una notificación a STORYPLACE a la siguiente dirección: StoryPlace HQ,
                                </strong>
                                <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211.
                                </strong>
                                <strong>Dicha notificación se considerará entregada cuando STORYPLACE la reciba mediante carta entregada por un servicio de entrega al día siguiente reconocido a nivel nacional o por correo prepagado con franqueo de primera clase a la dirección anterior.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Renuncia</strong>
                                </span>
                                <strong>. Cualquier renuncia o falta de cumplimiento de cualquier disposición del Acuerdo en una ocasión no se considerará una renuncia a ninguna otra disposición ni a dicha disposición en ninguna otra ocasión.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Separabilidad.</strong>
                                </span>
                                <strong>
                                    Si alguna parte de este Acuerdo se considera inválida o inaplicable, dicha parte se interpretará de manera que refleje, en la medida de lo posible, la intención original de las partes, y las partes restantes permanecerán en pleno vigor y efecto.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Control de exportación</strong>
                                </span>
                                <strong>. No puede usar, exportar, importar ni transferir las Propiedades de STORYPLACE excepto según lo autorice la ley de EE. UU., las leyes de la jurisdicción en la que obtuvo las Propiedades de STORYPLACE y cualquier otra ley aplicable. En particular, pero sin carácter limitativo, las Propiedades de STORYPLACE no pueden exportarse ni reexportarse (a) a ningún país sometido a embargo de los Estados Unidos, ni (b) a ninguna persona que figure en la lista de Nacionales Especialmente Designados del Departamento del Tesoro de Estados Unidos o en la Lista de Personas o Entidades Denegadas del Departamento de Comercio de Estados Unidos. Al utilizar las Propiedades de STORYPLACE, usted declara y garantiza que (y) no se encuentra en un país que esté sujeto a un embargo del gobierno de los Estados Unidos o que haya sido designado por el Gobierno de los Estados Unidos como país que «apoya al terrorismo» y (z) no figura en ninguna lista de partes prohibidas o restringidas del gobierno de los EE. UU. Tampoco utilizará las Propiedades de STORYPLACE para ningún propósito prohibido por la ley estadounidense, incluido el desarrollo, el diseño, la fabricación o la producción de misiles y armas nucleares, químicas o biológicas. Usted reconoce y acepta que los productos, servicios o tecnología proporcionados por STORYPLACE están sujetos a las leyes y reglamentos de control de exportación de los Estados Unidos. Deberá cumplir con estas leyes y reglamentos y, sin la autorización previa del gobierno de los EE. UU., no podrá exportar, reexportar ni transferir los productos, servicios o tecnología de STORYPLACE, ya sea directa o indirectamente, a ningún país en violación de dichas leyes y reglamentos.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Quejas de los consumidores</strong>
                                </span>
                                <strong>. De conformidad con el artículo 1789.3 del Código Civil de California, puede presentar sus quejas a la Unidad de Asistencia para Quejas de la División de Servicios al Consumidor del Departamento de Asuntos del Consumidor de California comunicándose con ellos por escrito en 400 R Street, Sacramento, CA 95814, o por teléfono al (800) 952-5210.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Acuerdo completo.</strong>
                                </span>
                                <strong>
                                    El presente Acuerdo es el acuerdo final, completo y exclusivo de las partes con respecto al objeto del presente documento y reemplaza y fusiona todas las discusiones previas entre las partes con respecto a dicho tema.</strong>
                            </li>
                        </ol>
                        <li>
                            <strong>Disposiciones internacionales. Las siguientes disposiciones se aplicarán solo si se encuentra en los países que se enumeran a continuación.</strong>
                        </li>
                        <ol>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Reino Unido</strong>
                                </span>
                                <strong>. Un tercero que no sea parte en el Acuerdo no tiene derecho, en virtud de la Ley de Contratos (Derechos de Terceros) de 1999, a hacer cumplir ninguna disposición del Acuerdo, pero esto no afecta a ningún derecho o recurso de dicho tercero que exista o esté disponible aparte de esa Ley.</strong>
                            </li>
                            <li>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>Alemania</strong>
                                </span>
                                <strong>. No obstante lo dispuesto en el presente documento, STORYPLACE tampoco se hace responsable de los actos de negligencia simple (a menos que causen lesiones o la muerte a una persona), excepto cuando estén causados por el incumplimiento de cualquier obligación contractual sustancial por parte de StoryPlace (vertragswesentliche Pflichten).</strong>
                            </li>
                        </ol>
                    </ol>
                    <p>
                        <strong>Fin del Acuerdo</strong>
                    </p>

                </LegalContainer>
            </>
        );
    }


    return (
        <>
            <LegalContainer>

                <h2 style={{ textAlign: 'center' }}>Terms &amp; Conditions</h2>
                <p>
                    <strong>Welcome to StoryPlace!</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>PLEASE READ THIS TERMS OF USE AGREEMENT (THE “TERMS OF USE”) CAREFULLY.&nbsp; STORYPLACE, INC. (“STORYPLACE”) OPERATES THE MOBILE APPLICATION, “STORYPLACE” (THE “APPLICATION”), ITS ASSOCIATED WEBSITES, INCLUDING
                    </strong>
                    <a target="_blank" href="https://www.storyplace.com/" rel="noreferrer">
                        <strong>WWW.STORYPLACE.COM</strong>
                    </a>
                    <strong>
                        (COLLECTIVELY, THE “WEBSITE”), AS WELL AS A NUMBER OF RELATED SERVICES (COLLECTIVELY, WITH THE APPLICATION, PLATFORM&nbsp; AND THE WEBSITE, THE “SERVICES”).&nbsp; BY CLICKING ON THE “I ACCEPT” BUTTON, COMPLETING THE REGISTRATION PROCESS FOR THE APPLICATION OR
                    </strong>
                    <strong>PLATFORM, AND/OR BROWSING THE WEBSITE OR DOWNLOADING THE APPLICATION, YOU REPRESENT THAT (1)
                    </strong>
                    <strong>YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF USE, (2) YOU ARE OF LEGAL AGE IN YOUR PLACE OF DOMICILE TO FORM A BINDING CONTRACT WITH STORYPLACE, AND (3) YOU HAVE THE AUTHORITY TO ENTER INTO THE TERMS OF USE PERSONALLY OR ON BEHALF OF THE COMPANY YOU HAVE NAMED AS THE USER, AND TO BIND THAT COMPANY TO THE TERMS OF USE.&nbsp; THE TERM “YOU” REFERS TO THE INDIVIDUAL OR LEGAL ENTITY, AS APPLICABLE, IDENTIFIED AS THE USER WHEN YOU REGISTERED THROUGH THE SERVICES.&nbsp; IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS OF USE, YOU MAY NOT ACCESS OR USE ANY PORTION OF THE SERVICES.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>PLEASE BE AWARE UNDER THE TERMS OF THIS AGREEMENT BETWEEN US, UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON YOUR CLAIMS.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO YOUR USE OF THE SERVICES WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF THE STATE OF CALIFORNIA, CONSISTENT WITH THE RULES OF ARBITRATION</strong>
                    <strong>, IN ACCORDANCE WITH THE STREAMLINED ARBITRATION RULES AND PROCEDURES OF JUDICIAL ARBITRATION AND MEDIATION SERVICES, INC. (“JAMS”) THEN IN EFFECT, BY ONE COMMERCIAL ARBITRATOR WITH SUBSTANTIAL EXPERIENCE IN RESOLVING INTELLECTUAL PROPERTY AND COMMERCIAL CONTRACT DISPUTES, WHO SHALL BE SELECTED FROM THE APPROPRIATE LIST OF JAMS ARBITRATORS IN ACCORDANCE WITH THE STREAMLINED ARBITRATION RULES AND PROCEDURES OF JAMS.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Your use of, and participation in, certain Services may be subject to additional terms (“Supplemental Terms”), and such Supplemental Terms will either be listed in the Terms of Use or will be presented to you for your acceptance when you sign up.&nbsp; If the Terms of Use are inconsistent with the Supplemental Terms, the Supplemental Terms shall control with respect to such Service.&nbsp; The Terms of Use and any applicable Supplemental Terms are referred to herein as the “Agreement.”</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>The Services include without limitation: the Application and online platform that offers a public journaling service which enables individuals to publish, share and save written and audio stories related to certain topics and/or locations.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>PLEASE NOTE THAT The Agreement IS subject to change by STORYPLACE in its sole discretion at any time.&nbsp; When changes are made, STORYPLACE will make a new copy of the Terms of Use available at the Website and within the Application and any new Supplemental Terms will be made available from within, or through, the affected Service on the Website or within the Application.&nbsp; We will also update the “Last Updated” date at the top of the Terms of Use.&nbsp; If we make any material changes, and you have registered with us to create an Account, we will also send an e-mail to you at the last e-mail address you provided to us pursuant to the Agreement.&nbsp; Any changes to the Agreement will be effective immediately for new users of the Website, the Application, and/or the Services and will be effective thirty (30) days after posting notice of such changes on the Website for existing users, provided that any material changes shall be effective for users who have an Account with us upon the earlier of thirty (30) days after posting notice of such changes on the Website or thirty (30) days after dispatch of an e-mail notice of such changes to Registered Users (defined in Section 2.1 below).&nbsp; STORYPLACE may require you to provide consent to the updated Agreement in a specified manner before further use of the Website, the Application, and/or the Services is permitted.&nbsp; If you do not agree to any change(s) after receiving a notice of such change(s), you shall stop using the Website, the Application, and the Services. Otherwise, your continued use of any of the Website, the Application, and Services constitutes your superseding acceptance of such change(s).&nbsp; PLEASE REGULARLY CHECK THE WEBSITE TO VIEW THE THEN-CURRENT TERMS.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Use of the Services and STORYPLACE Properties.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>The Application, the Website, the Services, and the information and content available on the Website and in the Application, and the Services (as these terms are defined herein) (each, a “STORYPLACE Property” and collectively, the “STORYPLACE Properties”) are protected by copyright laws throughout the world.&nbsp;</strong>
                </p>
                <ol>
                    <li>
                        <strong>License Terms.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Application License</strong>
                            </span>
                            <strong>. Subject to your compliance with the Agreement, STORYPLACE grants you a limited non-exclusive, non-transferable, non-sublicensable, revocable license to download, install and use a copy of the Application on a single mobile device or computer that you own or control and to run such copy of the Application solely for your own personal or internal purposes.&nbsp; Furthermore, with respect to any Application accessed through or downloaded from the Apple App Store (an “App Store Sourced Application”), you will only use the App Store Sourced Application (a) on an Apple-branded product that runs the iOS (Apple’s proprietary operating system) and (b) as permitted by the “Usage Rules” set forth in the Apple App Store Terms of Service. Notwithstanding the first sentence in this section, with respect to any Application access through or downloaded from the Google Play store (a “Google Play Sourced Application”), you may have additional license rights with respect to use of the Application on a shared basis within your designated family group.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Updates</strong>
                            </span>
                            <strong>. You understand that STORYPLACE Properties are evolving.&nbsp; As a result, STORYPLACE may require you to accept updates to STORYPLACE Properties that you have installed on your computer or mobile device.&nbsp; You acknowledge and agree that STORYPLACE may update STORYPLACE Properties with or without notifying you.&nbsp; You may need to update third-party software from time to time in order to use STORYPLACE Properties.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Certain Restrictions</strong>
                            </span>
                            <strong>. The rights granted to you in the Agreement are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, reproduce, distribute, host or otherwise commercially exploit STORYPLACE Properties or any portion of STORYPLACE Properties, including the Website, (b) you shall not frame or utilize framing techniques to enclose any trademark, logo, or other STORYPLACE Properties (including images, text, page layout or form) of STORYPLACE; (c) you shall not use any metatags or other “hidden text” using STORYPLACE’s name or trademarks; (d) you shall not modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any part of STORYPLACE Properties except to the extent the foregoing restrictions are expressly prohibited by applicable law; (e) you shall not use any manual or automated software, devices or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools or the like) to “scrape” or download data from any web pages contained in the Website (except that we grant the operators of public search engines revocable permission to use spiders to copy materials from the Website for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials); (f) you shall not access STORYPLACE Properties in order to build a similar or competitive website, application or service; (g) except as expressly stated herein, no part of STORYPLACE Properties may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means; and (h) you shall not remove or destroy any copyright notices or other proprietary markings contained on or in STORYPLACE Properties. Any future release, update or other addition to STORYPLACE Properties shall be subject to the Agreement.&nbsp; STORYPLACE, its suppliers and its service providers reserve all rights not granted in the Agreement.&nbsp; Any unauthorized use of any STORYPLACE Property terminates the licenses granted by STORYPLACE pursuant to the Agreement, whilst ensuring that the indemnification rights owed StoryPlace hereunder by user shall survive termination or expiry of this Agreement.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Third-Party Materials</strong>
                            </span>
                            <strong>. As a part of STORYPLACE Properties, you may have access to materials that are hosted by another party.&nbsp; You agree that it is impossible for STORYPLACE to monitor such materials and that you access these
                            </strong>
                            <strong>materials at your own risk.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Registering Your Account</strong>
                            </span>
                            <strong>. In order to access certain features of STORYPLACE Properties you may be required to become a Registered User (“User” or “Registered User”).&nbsp; For purposes of the Agreement, a “User” or “Registered
                            </strong>
                            <strong>User” is a user who has registered an account on the Website, PRO or the Application (“Account”) or has a valid account on the social networking service (“SNS”) through which the user has connected to the Website or the Application (each such account, a “Third-Party Account”).</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Access Through a SNS</strong>
                            </span>
                            <strong>. If you access the STORYPLACE Properties through a SNS as part of the functionality of the Website, the Application and/or the Services, you may link your Account with Third-Party Accounts, by allowing STORYPLACE to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.&nbsp; You represent that you are entitled to disclose your Third-Party Account login information to STORYPLACE and/or grant STORYPLACE access to your Third-Party Account (including, but not limited to, for use for the purposes described herein) without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account and without obligating STORYPLACE to pay any fees or making STORYPLACE subject to any usage limitations imposed by such third-party service providers.&nbsp; By granting STORYPLACE access to any Third-Party Accounts, you understand that STORYPLACE may access, make available and store (if applicable) any information, data, text, software, music, sound, photographs, graphics, video, messages, tags and/or other materials accessible through STORYPLACE Properties (collectively, “Content”) that you have provided to and stored in your Third-Party Account (“SNS Content”) so that it is available on and through STORYPLACE Properties via your Account.&nbsp; Unless otherwise specified in the Agreement, all SNS Content shall be considered to be Your Content&nbsp; for all purposes of the Agreement.&nbsp; Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your Account on STORYPLACE Properties. Please note that if a Third-Party Account or associated service becomes unavailable or STORYPLACE’s access to such Third-Party Account is terminated by the third-party service provider, then SNS Content will no longer be available on and through STORYPLACE Properties.&nbsp; You have the ability to disable the connection between your Account and your Third-Party Accounts at any time by accessing the “Settings” section of the Website.&nbsp; PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS, AND STORYPLACE DISCLAIMS ANY LIABILITY FOR PERSONALLY IDENTIFIABLE INFORMATION THAT MAY BE PROVIDED TO IT BY SUCH THIRD-PARTY SERVICE PROVIDERS IN VIOLATION OF THE PRIVACY SETTINGS THAT YOU HAVE SET IN SUCH THIRD-PARTY ACCOUNTS.&nbsp; STORYPLACE makes no effort to review any SNS Content for any purpose, including but not limited to, for accuracy, legality or noninfringement, and STORYPLACE is not responsible for any SNS Content.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Registration Data</strong>
                            </span>
                            <strong>. In registering an account on the Website, you agree to (a) provide true, accurate, current and complete information about yourself as prompted by the registration form (the “Registration Data”); and (b) maintain and promptly update the Registration Data to keep it true, accurate, current and complete.&nbsp; You represent that you are (l) at least thirteen (13) years old; (m) of legal age to form a binding contract; and (n) are not a person barred from using STORYPLACE Properties under the laws of the United States, your place of residence or any other applicable jurisdiction.&nbsp; Should you fail to be of legal age to enter into binding agreements within the jurisdiction of your domicile, You must provide written permission on your behalf by an authorized guardian or parent who is of legal age to be bound thereunder. You are responsible for all activities that occur under your Account.&nbsp; You agree that you shall monitor your Account to restrict use by unauthorized minors, and you will accept full responsibility for any unauthorized use of STORYPLACE Properties by minors.&nbsp; You may not share your Account or password with anyone, and you agree to (y) notify STORYPLACE immediately of any unauthorized use of your password or any other breach of security; and (z) exit from your Account at the end of each session.&nbsp; If you provide any information that is untrue, inaccurate, not current or incomplete, or STORYPLACE has reasonable grounds to suspect that any information you provide is untrue, inaccurate, not current or incomplete, STORYPLACE has the right to suspend or terminate your Account and refuse any and all current or future use of STORYPLACE Properties (or any portion thereof).&nbsp; You agree not to create an Account using a false identity or information, or on behalf of someone other than yourself.&nbsp; You agree that you shall not have more than one Account per platform or SNS at any given time.&nbsp; STORYPLACE reserves the right to remove or reclaim any usernames at any time and for any reason, including but not limited to, claims by a third party that a username violates the third party’s rights.&nbsp; You agree not to create an Account or use STORYPLACE Properties if you have been previously removed by STORYPLACE, or if you have been previously banned from any of STORYPLACE Properties.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Your Account</strong>
                            </span>
                            <strong>. Notwithstanding anything to the contrary herein, you acknowledge and agree that you shall have no ownership or other property interest in your Account, and you further acknowledge and agree that all rights in and to your Account are and shall forever be owned by and inure to the benefit of STORYPLACE. STORYPLACE reserves the right to terminate your Account if it has been inactive (i.e., you have not logged into your Account) for one hundred eighty (180) days and in such event, you shall not be entitled to any consideration for such termination.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Necessary Equipment and Software</strong>
                            </span>
                            <strong>. You must provide all equipment and software necessary to connect to STORYPLACE Properties, including but not limited to, a mobile device that is suitable to connect with and use STORYPLACE Properties, in cases where the Services offer a mobile component.&nbsp; You are solely responsible for any fees, including Internet connection or mobile fees, that you incur when accessing STORYPLACE Properties.&nbsp; By providing your cellphone number and using the Services, you hereby affirmatively consent to our use of your cellphone number for calls and texts in order to perform and improve upon the Services. STORYPLACE will not assess and charge for any calls or texts, but standard message charges or other charged from your wireless carrier may apply.&nbsp; You may opt out of receiving text messages from us in your account.</strong>
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li>
                        <strong>Responsibility for Content.</strong>
                    </li>
                </ol>
                <ol>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Types of Content</strong>
                        </span>
                        <strong>. You acknowledge that all Content, including STORYPLACE Properties, is the sole responsibility of the party from whom such Content originated.&nbsp; This means that you, and not STORYPLACE, are entirely responsible for all Content that you upload, post, e-mail, transmit or otherwise make available (“Make Available”) through STORYPLACE Properties (“Your Content”), and that you and other Registered Users of STORYPLACE Properties, and not STORYPLACE, are similarly responsible for all Content that you and they Make Available through STORYPLACE Properties (“User Content”).&nbsp;&nbsp;</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>No Obligation to Pre-Screen Content</strong>
                        </span>
                        <strong>. You acknowledge that STORYPLACE has no obligation to pre-screen Content (including, but not limited to, User Content), although STORYPLACE reserves the right in its sole and absolute discretion to pre-screen, refuse or remove any Content.&nbsp; By entering into the Agreement, you hereby provide your irrevocable consent to such monitoring.&nbsp; You acknowledge and agree that you have no expectation of privacy concerning the transmission of Your Content, including without limitation chat, text, or voice communications.&nbsp; In the event that STORYPLACE pre-screens, refuses or removes any Content, you acknowledge that STORYPLACE will do so for STORYPLACE’s benefit, not yours.&nbsp; Without limiting the foregoing, STORYPLACE shall have the right to remove any Content that violates the Agreement or is otherwise objectionable.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Storage</strong>
                        </span>
                        <strong>. Unless expressly agreed to by STORYPLACE in writing elsewhere, STORYPLACE has no obligation to store any of Your Content that you Make Available on STORYPLACE Properties.&nbsp; STORYPLACE has no responsibility or liability for the deletion or accuracy of any Content, including Your Content; the failure to store, transmit or receive transmission of Content; or the security, privacy, storage, or transmission of other communications originating with or involving use of STORYPLACE Properties.&nbsp; Certain Services may enable you to specify the level at which such Services restrict access to Your Content.&nbsp; You are solely responsible for applying the appropriate level of access to Your Content, if any.&nbsp; If you do not choose, the system may default to its most permissive setting.&nbsp; You agree that STORYPLACE retains the right to create reasonable limits on STORYPLACE’s use and storage of the Content, including Your Content, such as limits on file size, storage space, processing capacity, and similar limits described on the Website and as otherwise determined by STORYPLACE in its sole discretion.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>STORYPLACE Properties</strong>
                        </span>
                        <strong>. Except with respect to Your Content and User Content, you agree that STORYPLACE and its suppliers own all rights, title and interest in STORYPLACE Properties, including but not limited to the StoryPlace operational software, map and the contents therein.&nbsp; You will not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying any STORYPLACE Properties.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Trademarks</strong>
                        </span>
                        <strong>. STORYPLACE’s name and all related graphics, logos, service marks and trade names used on or in connection with any STORYPLACE Properties or in connection with the Services are the trademarks of STORYPLACE and may not be used without permission in connection with your, your products and/or services and/or any third-party products and/or services. Other trademarks, service marks and trade names that may appear on or in STORYPLACE Properties are the property of their respective owners.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Other Content</strong>
                        </span>
                        <strong>. Except with respect to Your Content, you agree that you have no right, title, or interest in or to any Content that appears on or in STORYPLACE Properties.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Your Content</strong>
                        </span>
                        <strong>. STORYPLACE does not claim ownership of Your Content.&nbsp; However, when you as a Registered User post or publish Your Content on or in STORYPLACE Properties, you represent that you own and/or have a royalty-free, perpetual, irrevocable, worldwide, non-exclusive right (including any moral rights) and license to use, license, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, derive revenue or other remuneration from, and communicate to the public, perform and display Your Content (in whole or in part) worldwide and/or to incorporate it in your other works in any form, media or technology now known or later developed, for the full term of any worldwide intellectual property right that may exist in Your Content.&nbsp;&nbsp;</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>License to Your Content</strong>
                        </span>
                        <strong>. Subject to any applicable account settings that you select, you grant STORYPLACE a fully paid, royalty-free, perpetual, irrevocable, worldwide, royalty-free, non-exclusive and fully sublicensable right (including any moral rights) and license to use, license, distribute, reproduce, modify, adapt, publicly perform, and publicly display Your Content (in whole or in part) for the purposes of operating STORYPLACE’s business.&nbsp; Please remember that other users may search for, see, use, modify and reproduce any of Your Content that you submit to any “public” area of STORYPLACE Properties.&nbsp; You warrant that the holder of any worldwide intellectual property right, including moral rights, in Your Content, has irrevocably licensed to you use thereof to allow you the right to grant the license stated above, or completely and effectively waived all such rights and validly and irrevocably granted to you the right to grant the license stated above.&nbsp; You agree that you, not STORYPLACE, are responsible for all of Your Content that you Make Available on or in STORYPLACE Properties. Subject to any applicable account settings that you select, you grant STORYPLACE a fully paid, royalty-free, perpetual, irrevocable, worldwide, royalty-free, non-exclusive and fully sublicensable right (including any moral rights) and license to use, license, distribute, reproduce, modify, adapt, publicly perform, and publicly display Your Content (in whole or in part, including its derivative, allied, ancillary and neighboring rights) for the purposes of operating STORYPLACE’s business. For
                        </strong>
                        <strong>the avoidance of doubt, STORYPLACE is currently in the business of encouraging the global sharing of stories and, with respect thereto, connecting storytellers and Content
                        </strong>
                        <strong>Creators. If STORYPLACE subsequently enters into the business of producing audio-visual works based on any of Your Content, it shall only do so with your express permission. Please remember that other users may search for, see, use, modify and reproduce any of Your Content that you submit to any “public” area of STORYPLACE Properties.&nbsp;</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Username</strong>
                        </span>
                        <strong>. Notwithstanding anything contained herein to the contrary, by submitting Your Content to any forums, comments or any other area on STORYPLACE Properties, you hereby expressly permit STORYPLACE to identify you by your username (which may be a pseudonym) as the contributor of Your Content in any publication in any form, media or technology now known or later developed in connection with Your Content.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Your Profile</strong>
                        </span>
                        <strong>. Any Content posted by you in your profile may not contain nudity, violence, sexually explicit, or offensive subject matter as determined by STORYPLACE in its sole and absolute discretion.&nbsp; You may not post or submit for print services a photograph of or by another person without that person’s permission.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Feedback</strong>
                        </span>
                        <strong>. You agree that submission of any ideas, suggestions, documents, and/or proposals to STORYPLACE through its suggestion, feedback, wiki, forum or similar pages (“Feedback”) is at your own risk and that STORYPLACE has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback.&nbsp; You represent and warrant that you have all rights necessary to submit the Feedback.&nbsp; You hereby grant to STORYPLACE a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of STORYPLACE Properties and/or STORYPLACE’s business.</strong>
                    </li>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Cheating and Hacking</strong>
                        </span>
                        <strong>. You agree that you will not at any time, under any circumstances:</strong>
                    </li>
                    <ol>
                        <li>
                            <strong>Use cheats, exploits, automation software, bots, hacks, mods or any unauthorized software designed to modify or interfere with any STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Interfere with or damage STORYPLACE Properties, including, without limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial-of-service attacks, packet or IP spoofing, forged routing or electronic mail address information, or similar methods or technology;</strong>
                        </li>
                        <li>
                            <strong>Modify or cause to be modified any files that are a part of STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Disrupt, overburden, or aid or assist in the disruption or overburdening of: (i) any computer or server used to offer or support STORYPLACE Properties; or (ii) the enjoyment of STORYPLACE Properties by any other person;</strong>
                        </li>
                        <li>
                            <strong>Institute, assist, or become involved in any type of attack, including, but not limited to, distribution of a virus, denial of service attacks upon STORYPLACE Properties, or other attempts to disrupt STORYPLACE Properties or any other person’s use or enjoyment of STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Attempt to gain unauthorized access to STORYPLACE Properties, accounts registered to others, or to the computers, servers or networks connected to STORYPLACE Properties by any means other than the user interface provided by STORYPLACE, including, but not limited to, by circumventing or modifying, attempting to circumvent or modify, or encouraging or assisting any other person to circumvent or modify, any security, technology, device or software that is part of STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Access, tamper with or use non-public areas of STORYPLACE Properties, STORYPLACE’s computer systems, STORYPLACE intellectual property or the technical delivery systems of STORYPLACE’s providers;</strong>
                        </li>
                        <li>
                            <strong>Attempt to probe, scan, or test the vulnerability of any STORYPLACE (including its parent, subsidiaries and affiliates, which shall apply throughout this Agreement when referencing STORYPLACE) system or network, or breach any security or authentication measures;</strong>
                        </li>
                        <li>
                            <strong>Disrupt or interfere with the security of, or otherwise cause harm to, STORYPLACE Properties, systems, resources, accounts, passwords, servers or networks connected to or accessible through STORYPLACE Properties or any affiliated or linked sites; or</strong>
                        </li>
                        <li>
                            <strong>Avoid, bypass, remove, deactivate, copy, scramble, impair, descramble, or otherwise circumvent any technological measure implemented by STORYPLACE or any of STORYPLACE’s providers or any other third party (including another Registered User) to protect STORYPLACE Properties.</strong>
                        </li>
                    </ol>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Commercial Activities</strong>
                        </span>
                        <strong>. You agree that you will not, under any circumstances (except to the extent expressly authorized by the Agreement):</strong>
                    </li>
                    <ol>
                        <li>
                            <strong>Reproduce, duplicate, copy, sell, trade, resell or exploit for any commercial purpose any portion of STORYPLACE Properties (including your Account), or access to or use of STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Upload, post, e-mail, transmit or otherwise make available any unsolicited or unauthorized advertising, promotional materials, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” or any other form of solicitation in connection with any STORYPLACE Property;</strong>
                        </li>
                        <li>
                            <strong>Use STORYPLACE Properties or any part thereof for any commercial purpose, including, but not limited to, communicating or facilitating any commercial advertisement or solicitation;</strong>
                        </li>
                        <li>
                            <strong>Engage in any chain letters, contests, junk email, pyramid schemes, spamming, surveys or other duplicative or unsolicited messages (commercial or otherwise) in connection with STORYPLACE Properties; or</strong>
                        </li>
                        <li>
                            <strong>Market any goods or services for any business purposes on or in connection with any STORYPLACE Properties.</strong>
                        </li>
                    </ol>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Unauthorized Use or Access</strong>
                        </span>
                        <strong>. You agree that you will not, under any circumstances:</strong>
                    </li>
                    <ol>
                        <li>
                            <strong>Interfere or attempt to interfere with the proper functioning of STORYPLACE Properties or connect to or use STORYPLACE Properties in any way not expressly permitted by the Agreement;</strong>
                        </li>
                        <li>
                            <strong>Systematically retrieve data or other content from STORYPLACE Properties to create or compile, directly or indirectly, in single or multiple downloads, a collection, compilation, database, directory or the like, whether by manual methods or through the use of bots, crawlers, spiders, or otherwise;</strong>
                        </li>
                        <li>
                            <strong>Use, display, mirror or frame STORYPLACE Properties, or any individual element within STORYPLACE Properties, STORYPLACE’s name, any STORYPLACE trademark, logo or other proprietary information, intellectual property, or the layout and design of any page or form contained on a page, without STORYPLACE’s express written consent;</strong>
                        </li>
                        <li>
                            <strong>Use any unauthorized software that accesses, intercepts, “mines” or otherwise collects information from or through STORYPLACE Properties or that is in transit from or to STORYPLACE Properties, including, but not limited to, any software that reads areas of RAM or streams of network traffic used by STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Intercept, examine or otherwise observe any proprietary communications protocol used by a client, a server or STORYPLACE Properties, whether through the use of a network analyzer, packet sniffer or other device;</strong>
                        </li>
                        <li>
                            <strong>Make any automated use of STORYPLACE Properties, or take any action that imposes or may impose (in STORYPLACE’s sole and absolute discretion and determination) an unreasonable or disproportionately large load on the infrastructure for STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Bypass any robot exclusion headers or other measures STORYPLACE takes to restrict access to STORYPLACE Properties, or use any software, technology or device to send content or messages, scrape, spider or crawl STORYPLACE Properties, or harvest or manipulate data;</strong>
                        </li>
                        <li>
                            <strong>Use, facilitate, create, or maintain any unauthorized connection to STORYPLACE Properties, including, but not limited to: (i) any connection to any unauthorized server that emulates, or attempts to emulate, any part of STORYPLACE Properties; or (ii) any connection using programs, tools or software not expressly (in writing) approved by STORYPLACE;</strong>
                        </li>
                        <li>
                            <strong>Reverse engineer, decompile, disassemble, decipher or otherwise attempt to derive the source code for any underlying software or other intellectual property used to provide STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Upload, post, e-mail, transmit or otherwise make available any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</strong>
                        </li>
                        <li>
                            <strong>Solicit or attempt to solicit personal information from other Registered Users of STORYPLACE Properties;</strong>
                        </li>
                        <li>
                            <strong>Use STORYPLACE Properties to collect, harvest, transmit, distribute, post or submit any information concerning any other person or entity, including without limitation, photographs of others without their permission, personal contact information or credit, debit, calling card, credit card or other account numbers;</strong>
                        </li>
                        <li>
                            <strong>Forge any TCP/IP packet header or any part of the header information in any e-mail or newsgroup posting, or in any way use STORYPLACE Properties to send altered, deceptive or false source-identifying information; or</strong>
                        </li>
                        <li>
                            <strong>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including, but not limited to, clear GIFs, 1x1 pixels, web bugs, cookies or other similar devices (sometimes referred to as “spyware,” “passive collection mechanisms” or “pcms”).</strong>
                        </li>
                    </ol>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>General</strong>
                        </span>
                        <strong>. In connection with your use of STORYPLACE Properties, you shall not:</strong>
                    </li>
                    <ol>
                        <li>
                            <strong>Make Available any Content that, in STORYPLACE’s sole and absolute discretion is determined to be, (i) unlawful, tortious, defamatory, vulgar, obscene, libelous, or racially, ethnically or otherwise objectionable; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil or criminal liability; (iii) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (iv) is violent or threatening, or promotes violence or actions that are threatening to any other person or company; or (v) promotes illegal or harmful activities;</strong>
                        </li>
                        <li>
                            <strong>Harm minors in any way;</strong>
                        </li>
                        <li>
                            <strong>Impersonate any person or entity, including, but not limited to, STORYPLACE personnel, or falsely state or otherwise misrepresent your affiliation with a person or entity;</strong>
                        </li>
                        <li>
                            <strong>Make Available any Content that you do not have a right to Make Available under any law or under contractual or fiduciary relationships (such as insider information, proprietary and confidential information learned or disclosed as part of employment relationships or under non-disclosure agreements);</strong>
                        </li>
                        <li>
                            <strong>Make Available any Content that infringes the rights of any person or entity, including without limitation, any patent, trademark, trade secret, copyright, privacy, publicity or other proprietary or contractual rights;</strong>
                        </li>
                        <li>
                            <strong>Intentionally or unintentionally violate any applicable local, state, national or international law or regulation, or any order of a court;</strong>
                        </li>
                        <li>
                            <strong>Register for more than one Account or register for an Account on behalf of an individual other than yourself;</strong>
                        </li>
                        <li>
                            <strong>Stalk or otherwise harass any other Registered User of our STORYPLACE Properties; or</strong>
                        </li>
                        <li>
                            <strong>Advocate, encourage or assist any third party in doing any of the foregoing activities in this section.</strong>
                        </li>
                    </ol>
                </ol>
                <ol>
                    <li>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Investigations</strong>
                        </span>
                        <strong>.</strong>
                    </li>
                </ol>
                <ol>
                    <li>
                        <strong>STORYPLACE may, but is not obligated to, monitor or review STORYPLACE Properties and Content at any time.&nbsp; Without limiting the foregoing, STORYPLACE shall have the right, in its sole discretion, to remove any of Your Content for any reason (or no reason), including but not limited to, if such Content violates the Agreement or any applicable law.&nbsp; Although STORYPLACE does not generally monitor user activity occurring in connection with STORYPLACE Properties or Content, if STORYPLACE becomes aware of any possible violations by you of any provision of the Agreement, STORYPLACE reserves the right to investigate such violations, and STORYPLACE may, at its sole and absolute discretion, immediately terminate your license to use STORYPLACE Properties, or change, alter or remove for any duration of time, Your Content, in whole or in part, without prior notice to you.</strong>
                    </li>
                </ol>
                <ol>
                    <li>
                        <strong>Interactions with Other Users.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>User Responsibility</strong>
                            </span>
                            <strong>. You are solely responsible for your interactions with other Registered Users and any other parties with whom you interact on or through the STORYPLACE Properties.&nbsp; STORYPLACE reserves the right, but has no obligation, to intercede in such disputes.&nbsp; You agree that STORYPLACE will not be responsible for any liability incurred as the result of such interactions, including without limitation any interactions between Content Creators.&nbsp; YOU UNDERTAKE ALL INTERACTIONS WITH ANY OTHER USERS SOLELY AT YOUR OWN RISK, AND STORYPLACE DISCLAIMS ANY AND ALL LIABILITY IN CONNECTION THEREWITH.&nbsp; STORYPLACE FURTHER DISCLAIMS ANY AND ALL LIABILITY IN CONNECTION WITH ANY DISPUTE BETWEEN USERS OF OUR SERVICES, INCLUDING ANY DISPUTES RELATING TO STORIES, ACCESS TO STORIES, IDEA SUBMISSIONS, INFORMATION EXCHANGED BETWEEN USERS, AND ANY LIABILITY RELATING TO ANY DISCUSSIONS OR AGREEMENTS BETWEEN CONTENT CREATORS AND USERS, INCLUDING BUT IN NO WAY LIMITED TO THOSE RELATING TO CONTENT PURCHASE, ACQUISITION, DEVELOPMENT, PRODUCTION, DISTRIBUTION AND/OR EXPLOITATION.&nbsp; YOU FURTHER ACKNOWLEDGE AND AGREE THAT STORYPLACE DOES NOT CONDUCT ANY PROFILING OR CHECKS, INCLUDING BACKGROUND OR CRIMINAL RECORDS SEARCHES, ON ANY USERS.&nbsp; STORYPLACE MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF ANY USER OR THE COMPATIBILITY OF ANY USER WITH ANY OTHER CURRENT OR FUTURE USER.&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Content Provided by Other Users</strong>
                            </span>
                            <strong>. STORYPLACE Properties may contain User Content provided by other Registered Users.&nbsp; STORYPLACE is not responsible for and does not control User Content.&nbsp; STORYPLACE has no obligation to review or monitor, and does not approve, endorse or make any representations or warranties with respect to User Content or any content not generated by STORYPLACE.&nbsp; You use all User Content and interact with other users at your own risk.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>Third-Party Services and Fees.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Third-Party Websites, Applications and Ads</strong>
                            </span>
                            <strong>. STORYPLACE Properties may contain links to third-party websites (“Third-Party Websites”) and applications (“Third-Party Applications”) and advertisements for third parties (“Third-Party Ads”). When you click on a link to a Third-Party Website, Third-Party Application or Third-Party Ad, we will not warn you that you have left STORYPLACE Properties and are subject to the terms and conditions (including privacy policies) of another website or destination.&nbsp; Such Third-Party Websites, Third-Party Applications and Third-Party Ads are not under the control of STORYPLACE.&nbsp; STORYPLACE is not responsible for any Third-Party Websites, Third-Party Applications or Third-Party Ads.&nbsp; STORYPLACE provides these Third-Party Websites, Third-Party Applications and Third Party Ads only as a convenience and does not endorse, review, approve, monitor, warrant, or make any representations with respect to Third-Party Websites, Third-Party Applications or Third-Party Ads, or any product or service provided in connection therewith.&nbsp; You use all links in Third-Party Websites, Third-Party Applications and Third-Party Ads at your own risk. When you leave our Website, the Agreement and policies no longer govern.&nbsp; You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites or Third-Party Applications, and are encouraged to make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>App Stores</strong>
                            </span>
                            <strong>. You acknowledge and agree that the availability of the Application and the Services is dependent on the third party from whom you received the Application license, e.g., the Apple App Store or Google Play (each, an “App Store”).&nbsp; You acknowledge that the Agreement is between you and STORYPLACE and not with an App Store.&nbsp; STORYPLACE, not an App Store, is solely responsible for STORYPLACE Properties, including the Application, the content thereof, maintenance, support services, and warranty therefor, and addressing any claims relating thereto (e.g., legal compliance or intellectual property infringement).&nbsp; In order to access the Application, you must have access to a wireless network, and you agree to pay all fees associated with such access.&nbsp; You also agree to pay all fees (if any) charged by an App Store in connection with STORYPLACE Properties, including related to the Application, if any.&nbsp; You agree to comply with, and your license to use the Application is conditioned upon your compliance with all terms of agreement imposed by the applicable App Store when using any STORYPLACE Property, including but not limited to the Application. You acknowledge that an App Store (and its subsidiaries) are third-party beneficiaries of the Agreement and will have the right to enforce it.&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Sales Tax</strong>
                            </span>
                            <strong>. STORYPLACE does not currently charge a fee for any of its Services. If at any point in the future, STORYPLACE begins to charge a fee for any of its Services, Supplemental Services or other (“Additional Fees”), the Additional Fees will not include any Sales Tax that may become due in connection with such aforementioned Services.&nbsp; If STORYPLACE determines it has a legal obligation to collect Sales Tax or other governmental from you in connection with this Agreement, STORYPLACE shall collect such Sales Tax or other governmental tax, in addition to the Fees and any Additional Fees (if any).&nbsp; If any Services, or payments for any Services, under the Agreement are subject to Sales Tax in any jurisdiction and you have not remitted the applicable Sales Tax to STORYPLACE, you will be responsible for the payment of such Sales Tax (including other governmental taxes) and any related penalties or interest to the relevant tax authority, and you will indemnify, defend and hold harmless STORYPLACE et al., for all liability and expense STORYPLACE et al. may incur in connection therewith.&nbsp; Upon STORYPLACE’s request, you will provide it with official receipts issued by the appropriate taxing authority, or other such evidence that you have paid all applicable taxes.&nbsp; For purposes of this section, “Sales Tax” shall mean any sales and/or use tax and/or any other tax measured by sales proceeds that is the functional equivalent of a sales tax where the applicable taxing jurisdiction does not otherwise impose a sales or use tax.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>You agree to indemnify, defend and hold STORYPLACE, its parents, subsidiaries, affiliates, stockholders, officers, employees, agents, lawyers, partners, suppliers, and licensors (each, a “STORYPLACE Party” and collectively, the “STORYPLACE Parties”) harmless from any losses, costs, liabilities and expenses (including reasonable attorneys’ fees and expert witnesses’ costs) relating to or arising out of any and all of the following: (a) Your Content, including any lawsuit, claim or action by another Registered User or any other third party alleging that Your Content infringes any rights, including intellectual property, copyright and privacy rights; (b) any lawsuit, claim or action relating to your use of our Services brought against any STORYPLACE Party, including without limitation any lawsuit, claim or action by a User, third party and/or content creator alleging (i) idea theft, (ii) breach of an implied-in-fact contract or (iii) intellectual property or copyright infringement; (c) any lawsuit, claim or action by another Registered User or any other third party alleging that Your Content is defamatory; (d) your use of, or inability to use, any STORYPLACE Property; (e) your violation of the Agreement; (f) your violation of any rights of another party, including without limitation any Registered Users; or (g) your violation of any applicable laws, rules or regulations.&nbsp; STORYPLACE reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with STORYPLACE in asserting any available defenses, without STORYPLACE waiving any of its indemnification rights owed STORYPLACE. You agree that the provisions in this section will survive any termination of your Account, the Agreement and/or your access to STORYPLACE Properties.</strong>
                    </li>
                    <li>
                        <strong>Disclaimer of Warranties and Conditions.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>As Is</strong>
                            </span>
                            <strong>. YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF STORYPLACE PROPERTIES IS AT YOUR SOLE RISK, AND STORYPLACE PROPERTIES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITH ALL FAULTS. STORYPLACE PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARISING FROM USE OF THE WEBSITE.&nbsp;</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>STORYPLACE PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) STORYPLACE PROPERTIES WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS; (2) YOUR USE OF STORYPLACE PROPERTIES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; OR (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF STORYPLACE PROPERTIES WILL BE ACCURATE OR RELIABLE.</strong>
                            </li>
                            <li>
                                <strong>ANY CONTENT DOWNLOADED FROM OR OTHERWISE ACCESSED THROUGH STORYPLACE PROPERTIES IS ACCESSED AT YOUR OWN RISK, AND YOU SHALL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY, INCLUDING, BUT NOT LIMITED TO, YOUR COMPUTER SYSTEM AND ANY DEVICE YOU USE TO ACCESS STORYPLACE PROPERTIES, OR ANY OTHER LOSS THAT RESULTS FROM ACCESSING SUCH CONTENT.</strong>
                            </li>
                            <li>
                                <strong>THE SERVICES MAY BE SUBJECT TO DELAYS, CANCELLATIONS AND OTHER DISRUPTIONS. STORYPLACE MAKES NO WARRANTY, REPRESENTATION OR CONDITION WITH RESPECT TO SERVICES, INCLUDING BUT NOT LIMITED TO, THE QUALITY, EFFECTIVENESS, REPUTATION AND OTHER CHARACTERISTICS OF SERVICES.</strong>
                            </li>
                            <li>
                                <strong>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM STORYPLACE OR THROUGH STORYPLACE PROPERTIES WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</strong>
                            </li>
                            <li>
                                <strong>From time to time, STORYPLACE may offer new “beta” features or tools with which its registered users may experiment. Such features or tools are offered solely for experimental purposes and without any warranty
                                </strong>
                                <span style={{ textDecoration: "underline" }}>
                                    <strong>of any kind</strong>
                                </span>
                                <strong>, and may be modified or discontinued at STORYPLACE’s sole and absolute discretion.&nbsp; The provisions of this section apply with full force to such features or tools.</strong>
                            </li>
                        </ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>No Liability for Conduct of Third Parties</strong>
                            </span>
                            <strong>. YOU ACKNOWLEDGE AND AGREE THAT STORYPLACE PARTIES ARE NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD STORYPLACE PARTIES LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND THAT THE RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>No Liability for Conduct of Other Users</strong>
                            </span>
                            <strong>. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF STORYPLACE PROPERTIES. YOU UNDERSTAND THAT STORYPLACE DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF STORYPLACE PROPERTIES.&nbsp; STORYPLACE MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF USERS OF STORYPLACE PROPERTIES OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS OF STORYPLACE PROPERTIES.&nbsp; YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF STORYPLACE PROPERTIES, PARTICULARLY IF YOU DECIDE TO MEET OFFLINE OR IN PERSON.&nbsp; YOU ACKNOWLEDGE AND AGREE THAT STORYPLACE DOES NOT CONDUCT BACKGROUND CHECKS ON ANY USER.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>No Liability for Conduct of Users of PRO</strong>
                            </span>
                            <strong>. IF YOU ARE A USER, YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS, INCLUDING WITHOUT LIMITATION INTERACTIONS RELATING TO ANY STORIES, ACCESS TO AND SUBMISSION OF SUCH STORIES, AND ANY COMMUNICATIONS OR AGREEMENTS RELATING TO (BUT NOT LIMITED TO) THE ACQUISITION OF ANY RIGHT, TITLE OR INTEREST IN SUCH STORIES.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>Limitation of Liability.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Disclaimer of Certain Damages</strong>
                            </span>
                            <strong>. YOU UNDERSTAND AND AGREE THAT IN NO EVENT SHALL STORYPLACE PARTIES BE LIABLE FOR ANY LOSS OF PROFITS, REVENUE OR DATA, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, OR DAMAGES OR COSTS DUE TO LOSS OF PRODUCTION OR USE, BUSINESS INTERRUPTION, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, IN EACH CASE WHETHER OR NOT STORYPLACE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THE AGREEMENT OR ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH OTHER USERS OF STORYPLACE PROPERTIES, ON ANY THEORY OF LIABILITY, RESULTING FROM: (1) THE USE OR INABILITY TO USE STORYPLACE PROPERTIES; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED FOR TRANSACTIONS ENTERED INTO THROUGH STORYPLACE PROPERTIES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (4) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON STORYPLACE PROPERTIES; OR (5) ANY OTHER MATTER RELATED TO STORYPLACE PROPERTIES, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.&nbsp; THE FOREGOING LIMITATION ON LIABILITY SHALL NOT APPLY TO LIABILITY OF A STORYPLACE PARTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A STORYPLACE PARTY’S GROSS NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A STORYPLACE PARTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Cap on Liability</strong>
                            </span>
                            <strong>. UNDER NO CIRCUMSTANCES WILL STORYPLACE PARTIES BE LIABLE TO YOU
                            </strong>
                            <strong>(INCLUDING ALL LEGAL AND COLLECTION FEES AND COSTS)
                            </strong>
                            <strong>FOR MORE THAN THE GREATER OF (A) THE TOTAL AMOUNT PAID TO STORYPLACE by you during the one-month period prior to the act, omission or occurrence giving rise to such liability and (B) THE REMEDY OR PENALTY IMPOSED BY THE STATUTE UNDER WHICH SUCH CLAIM ARISES. &nbsp; THE FOREGOING CAP ON LIABILITY SHALL NOT APPLY TO LIABILITY OF A STORYPLACE PARTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A STORYPLACE PARTY’S GROSS NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A STORYPLACE PARTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>User Content</strong>
                            </span>
                            <strong>. EXCEPT FOR STORYPLACE’S OBLIGATIONS TO PROTECT YOUR PERSONAL DATA AS SET FORTH IN THE STORYPLACE’S
                            </strong>
                            <a target="_blank" href="https://www.storyplace.com/privacy" rel="noreferrer">
                                <strong>PRIVACY POLICY</strong>
                            </a>
                            <strong>, STORYPLACE ASSUMES NO RESPONSIBILITY FOR THE TIMELINESS, DELETION, MIS-DELIVERY OR FAILURE TO STORE ANY CONTENT (INCLUDING, BUT NOT LIMITED TO, YOUR CONTENT AND USER CONTENT), USER COMMUNICATIONS AND/OR PERSONALIZATION SETTINGS.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Basis of the Bargain</strong>
                            </span>
                            <strong>. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN STORYPLACE AND YOU.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>Procedure for Making Claims of Copyright Infringement. It is STORYPLACE’s policy to terminate membership privileges of any Registered User who repeatedly infringes copyright upon prompt notification to STORYPLACE by the copyright owner or the copyright owner’s legal agent.&nbsp; Without limiting the foregoing, if you believe that your work has been copied and posted on STORYPLACE Properties in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information: (a) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; (b) a description of the copyrighted work that you claim has been infringed; (c) a description of the location on STORYPLACE Properties of the material that you claim is infringing; (d) your address, telephone number and e-mail address; (e) a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; and (f) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.&nbsp; Contact information for STORYPLACE’s Copyright Agent for notice of claims of copyright infringement is as follows: StoryPlace HQ,
                        </strong>
                        <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Violations</strong>
                            </span>
                            <strong>. If STORYPLACE becomes aware of any possible violations by you of the Agreement, STORYPLACE reserves the right to investigate such violations.&nbsp; If, as a result of the investigation, STORYPLACE believes that criminal activity has occurred, STORYPLACE reserves the right to refer the matter to, and to cooperate with, any and all applicable legal authorities.&nbsp; STORYPLACE is entitled, except to the extent prohibited by applicable law, to disclose any information or materials on or in STORYPLACE Properties, including Your Content, in STORYPLACE’s possession in connection with your use of STORYPLACE Properties, to (a) comply with applicable laws, legal process or governmental request; (b) enforce the terms, (c) respond to any claims that Your Content violates the rights of third parties, (d) respond to your requests for customer service, or (e) protect the rights, property or personal safety of STORYPLACE, its users or the public, and all enforcement or other government officials, as STORYPLACE in its sole and absolute discretion believes to be necessary or appropriate.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Breach</strong>
                            </span>
                            <strong>. In the event that STORYPLACE determines, in its sole and absolute discretion, that you have breached any portion of the Agreement, or have otherwise demonstrated conduct inappropriate for STORYPLACE Properties, STORYPLACE reserves the right to:</strong>
                        </li>
                        <ol>
                            <li>
                                <strong>Warn you via e-mail (to any e-mail address you have provided to STORYPLACE) that you have violated the Agreement;</strong>
                            </li>
                            <li>
                                <strong>Delete any of Your Content provided by you or your agent(s) to STORYPLACE Properties;</strong>
                            </li>
                            <li>
                                <strong>Discontinue your registration(s) with any of STORYPLACE Properties, including any Services or any STORYPLACE community;</strong>
                            </li>
                            <li>
                                <strong>Discontinue your subscription to any Services;</strong>
                            </li>
                            <li>
                                <strong>Notify and/or send Content to and/or fully cooperate with the proper law enforcement authorities for further action; and/or</strong>
                            </li>
                            <li>
                                <strong>Pursue any other action which STORYPLACE deems to be appropriate.</strong>
                            </li>
                        </ol>
                    </ol>
                    <li>
                        <strong>Term and Termination.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Term</strong>
                            </span>
                            <strong>. The Agreement commences on the date when you accept it (as described above) and remain in full force and effect while you use STORYPLACE Properties, unless terminated earlier in accordance with the Agreement, whilst ensuring, agreeing and acknowledging that certain provisions owed STORYPLACE, as stipulated herein shall survive such termination or expiry.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Prior Use</strong>
                            </span>
                            <strong>. Notwithstanding the foregoing, you hereby acknowledge and agree that the Agreement commenced on the earlier to occur of (a) the date you first used STORYPLACE Properties or (b) the date you accepted the Agreement, will remain in full force and effect while you use any STORYPLACE Properties, unless earlier terminated in accordance with the Agreement</strong>
                            <strong>,
                            </strong>
                            <strong>whilst ensuring, agreeing and acknowledging that certain provisions owed STORYPLACE as stipulated herein shall survive such termination or expiry.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Termination of Services by You</strong>
                            </span>
                            <strong>. If you want to terminate the Services provided by STORYPLACE, you may do so by (a) notifying STORYPLACE at any time and (b) closing your Account for all of the Services that you use. Your notice should be sent, in writing, to STORYPLACE’s address set forth below</strong>
                            <strong>,
                            </strong>
                            <strong>whilst the parties agree that certain provisions as stipulated herein owed to STORYPLACE shall survive such termination or expiry.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Effect of Termination</strong>
                            </span>
                            <strong>. Termination of any Service includes (but is not limited to) removal of access to such Service and barring of further use of the Service.&nbsp; Termination of all Services also includes deletion of your password and all related information, files and Content associated with or inside your Account (or any part thereof), including Your Content (in STORYPLACE’s sole and absolute discretion).&nbsp; Upon termination of any Service, your right to use such Service will automatically terminate immediately, whilst ensuring, agreeing and acknowledging that certain provisions owed STORYPLACE as stipulated herein shall survive such termination or expiry.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Prior Use</strong>
                            </span>
                            <strong>. Notwithstanding the foregoing, you hereby acknowledge,&nbsp; You understand that any termination of Services may involve deletion of Your Content associated therewith from our live databases.&nbsp; STORYPLACE will not have any liability whatsoever to you for any suspension or termination, including for deletion of Your Content.&nbsp; All provisions of the Agreement which by their nature should survive, shall survive termination of Services, including without limitation, ownership provisions, indemnification, warranty disclaimers, and limitation of liability</strong>
                            <strong>
                                and shall be applied throughout this Agreement.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>No Subsequent Registration</strong>
                            </span>
                            <strong>. If your registration(s) with or ability to access STORYPLACE Properties, or any other STORYPLACE community is discontinued by STORYPLACE due to your violation of any portion of the Agreement or for conduct otherwise inappropriate for the community, then you agree that you shall not attempt to re-register with or access STORYPLACE Properties or any STORYPLACE community through use of a different member name or otherwise, and you acknowledge that you will not be entitled to receive any consideration related to those STORYPLACE Properties to which your access has been terminated.&nbsp; In the event that you violate the immediately preceding sentence, STORYPLACE reserves the right, in its sole discretion, to immediately take any or all of the actions set forth herein without any notice or warning to you.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>International Users. STORYPLACE Properties can be accessed from countries around the world and may contain references to Services and Content that are not available in your country.&nbsp; These references do not imply that STORYPLACE intends to announce such Services or Content in your country.&nbsp; STORYPLACE Properties are controlled and offered by STORYPLACE from its facilities in the United States of America. STORYPLACE makes no representations that STORYPLACE Properties are appropriate or available for use in other locations.&nbsp; Those who access or use STORYPLACE Properties from other countries do so at their own volition and are responsible for compliance with local law.</strong>
                    </li>
                    <li>
                        <strong>Dispute Resolution</strong>
                        <strong>
                            <em>. Please read the following arbitration agreement in this Section (“</em>
                        </strong>
                        <strong>Arbitration Agreement</strong>
                        <strong>
                            <em>”) carefully.&nbsp; It requires you to arbitrate disputes with STORYPLACE and limits the manner in which you can seek relief from us.&nbsp;</em>
                        </strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Applicability of Arbitration Agreement</strong>
                            </span>
                            <strong>
                                <em>.</em>
                            </strong>
                            <strong>
                                You agree that any dispute or claim relating in any way to your access or use of the Website, to any products sold or distributed through the Website, or to any aspect of your relationship with STORYPLACE, will be resolved by binding arbitration, rather than in court, except that STORYPLACE may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents).&nbsp; This Arbitration Agreement shall apply, without limitation, to all claims that arose or were asserted before the effective date of this Agreement or any prior version of this Agreement.&nbsp;&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Arbitration Rules and Jurisdiction</strong>
                            </span>
                            <strong>
                                <em>.
                                </em>
                            </strong>
                            <strong>All disputes arising out of or in connection with the present Agreement, including any question regarding its existence, validity or termination, shall be finally settled under the Rules of Arbitration
                            </strong>
                            <strong>in Los Angeles County, California, in accordance with the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with the Streamlined Arbitration Rules and Procedures of JAMS. Judgment upon the award so rendered may be entered in a court having jurisdiction, or application may be made to such court for judicial acceptance of any award and an order of enforcement, as the case may be. Notwithstanding the foregoing, you agree to waive your rights to seek or actually institute an action in a court of proper jurisdiction for injunctive or other equitable relief and agree to limit all recourse you may seek to monetary damages at law.&nbsp; For all purposes of these Terms, you consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, Los Angeles County, California. The prevailing party in any action or proceeding arising out of these Terms will be entitled to an award of costs and outside attorneys’ fees. To the fullest extent permitted by law, you and StoryPlace agree that all claims against the other can only be brought in an individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or other representative proceeding. You agree that arbitrators may not conduct any class, consolidated, or representative proceeding, and are limited to providing relief warranted by an individual party's claim.
                            </strong>
                            <strong>Notwithstanding anything to the contrary herein, enforcement of any award may be sought in any court of competent jurisdiction.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Waiver of Jury Trial</strong>
                            </span>
                            <strong>.&nbsp; YOU AND STORYPLACE HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and STORYPLACE are instead electing that all claims and disputes shall be resolved by arbitration under this Agreement. An arbitrator can award on an individual basis the same damages and relief as a court and must follow this Agreement as a court would.&nbsp; However, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.&nbsp;&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Waiver of Class or Other Non-Individualized Relief</strong>
                            </span>
                            <strong>.&nbsp; ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER. If a decision is issued stating that applicable law precludes enforcement of any of this subsection’s limitations as to a given claim for relief, then the claim must be severed from the arbitration and brought into the state or federal courts located in the State of California.&nbsp; All other claims shall be arbitrated.&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>30-Day Right to Opt Out</strong>
                            </span>
                            <strong>. You have the right to opt out of the provisions of this arbitration provision by sending written notice of your decision to opt out to: support@storyplace.com, within 30 days after first becoming subject to this Agreement. Your notice must include your name and address, your STORYPLACE username (if any), the email address you used to set up your STORYPLACE account (if you have one), and an unequivocal statement that you want to opt out of this arbitration provision.&nbsp; If you opt out of this arbitration provision, all other parts of this Agreement will continue to apply to you.&nbsp; Opting out of this arbitration provision has no effect on any other agreements that you may currently have, or may enter in the future, with us.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Severability</strong>
                            </span>
                            <strong>
                                <em>.
                                </em>
                            </strong>
                            <strong>If any part or parts of this Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Survival of Agreement</strong>
                            </span>
                            <strong>
                                <em>.
                                </em>
                            </strong>
                            <strong>This Agreement will survive the termination of your relationship with STORYPLACE.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Modification</strong>
                            </span>
                            <strong>. Notwithstanding any provision in this Agreement to the contrary, we agree that if STORYPLACE makes any future material change to this Agreement, you may reject IN WRITING that change within thirty (30) days of such change becoming effective by writing STORYPLACE at the following address: Storyplace HQ,
                            </strong>
                            <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211</strong>
                            <strong>.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>General Provisions.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Electronic Communications</strong>
                            </span>
                            <strong>. The communications between you and STORYPLACE may take place via electronic means, whether you visit STORYPLACE Properties or send STORYPLACE e-mails, or whether STORYPLACE posts notices on STORYPLACE Properties or communicates with you via e-mail.&nbsp; For contractual purposes, you (a) consent to receive communications from STORYPLACE in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that STORYPLACE provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing.&nbsp; The foregoing does not affect your statutory rights.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Release</strong>
                            </span>
                            <strong>. You hereby release STORYPLACE Parties and their successors and assigns from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from your use of STORYPLACE Properties, including but not limited to, any interactions with or conduct of other users or third-party websites of any kind arising in connection with or as a result of the Agreement or your use of STORYPLACE Properties. If you are a California resident, you hereby waive California Civil Code Section 1542, which states,
                            </strong>
                            <strong>
                                <em>“A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.”&nbsp;
                                </em>
                            </strong>
                            <strong>The foregoing release does not apply to any claims, demands, or any losses, damages, rights and actions of any kind, including personal injuries, death or property damage for any unconscionable commercial practice by a STORYPLACE Party or for such party’s fraud, deception, false promise, misrepresentation or concealment, suppression or omission of any material fact in connection with the Website.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Assignment</strong>
                            </span>
                            <strong>. The Agreement, and your rights and obligations hereunder, may not be assigned, subcontracted, delegated or otherwise transferred by you without STORYPLACE’s prior written consent, to be withheld in its sole and absolute discretion, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be immediately deemed null and void ab initio.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Force Majeure</strong>
                            </span>
                            <strong>. STORYPLACE shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, pandemics, epidemics, accidents, strikes or shortages of transportation facilities, fuel, energy, labor or materials.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Questions, Complaints, Claims</strong>
                            </span>
                            <strong>. If you have any questions, complaints or claims with respect to STORYPLACE Properties, please contact us at: support@storyplace.com.&nbsp; We will do our best to address your concerns.&nbsp; If you feel that your concerns have been addressed incompletely, we invite you to let us know for further investigation.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Exclusive Venue</strong>
                            </span>
                            <strong>. To the extent the parties are permitted under this Agreement to initiate recourse, both you and STORYPLACE agree that all claims and disputes arising out of or relating to the Agreement will be held exclusively in Los Angeles County, California.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Governing Law and Jurisdiction</strong>
                            </span>
                            <strong>. The Terms of Use and any action related thereto will be governed and interpreted by and under the laws of the State of California, consistent with
                            </strong>
                            <strong>the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect</strong>
                            <strong>, without giving effect to any principles that provide for the application of the law of another jurisdiction.&nbsp;&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Choice of Language</strong>
                            </span>
                            <strong>. This Agreement, and any contract between us, are only in the English language.&nbsp;&nbsp;</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Notice</strong>
                            </span>
                            <strong>. Where STORYPLACE requires that you provide an e-mail address, you are responsible for providing STORYPLACE with your most current e-mail address.&nbsp; In the event that the last e-mail address you provided to STORYPLACE is not valid, or for any reason is not capable of delivering to you any notices required/ permitted by the Agreement, STORYPLACE’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice.&nbsp; You may give notice to STORYPLACE at the following address: StoryPlace HQ,
                            </strong>
                            <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211.&nbsp; Such
                            </strong>
                            <strong>notice shall be deemed given when received by STORYPLACE by letter delivered by nationally recognized overnight delivery service or first class postage prepaid mail at the above address.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Waiver</strong>
                            </span>
                            <strong>. Any waiver or failure to enforce any provision of the Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Severability</strong>
                            </span>
                            <strong>. If any portion of this Agreement is held invalid or unenforceable, that portion shall be construed in a manner to reflect, as nearly as possible, the original intention of the parties, and the remaining portions shall remain in full force and effect.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Export Control</strong>
                            </span>
                            <strong>. You may not use, export, import, or transfer STORYPLACE Properties except as authorized by U.S. law, the laws of the jurisdiction in which you obtained STORYPLACE Properties, and any other applicable laws.&nbsp; In particular, but without limitation, STORYPLACE Properties may not be exported or re-exported (a) into any United States embargoed countries, or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Department of Commerce’s Denied Person’s List or Entity List. By using STORYPLACE Properties, you represent and warrant that (y) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country and (z) you are not listed on any U.S. Government list of prohibited or restricted parties. You also will not use STORYPLACE Properties for any purpose prohibited by U.S. law, including the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.&nbsp; You acknowledge and agree that products, services or technology provided by STORYPLACE are subject to the export control laws and regulations of the United States.&nbsp; You shall comply with these laws and regulations and shall not, without prior U.S. government authorization, export, re-export, or transfer STORYPLACE products, services or technology, either directly or indirectly, to any country in violation of such laws and regulations.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Consumer Complaints</strong>
                            </span>
                            <strong>. In accordance with California Civil Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Entire Agreement</strong>
                            </span>
                            <strong>. The Agreement is the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.</strong>
                        </li>
                    </ol>
                    <li>
                        <strong>International Provisions. The following provisions shall apply only if you are located in the countries listed below.</strong>
                    </li>
                    <ol>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>United Kingdom</strong>
                            </span>
                            <strong>. A third party who is not a party to the Agreement has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any provision of the Agreement, but this does not affect any right or remedy of such third party which exists or is available apart from that Act.</strong>
                        </li>
                        <li>
                            <span style={{ textDecoration: "underline" }}>
                                <strong>Germany</strong>
                            </span>
                            <strong>. Notwithstanding anything to the contrary herein, STORYPLACE is also not liable for acts of simple negligence (unless they cause injuries to or death of any person), except when they are caused by a breach of any substantial contractual obligations by StoryPlace (vertragswesentliche Pflichten).</strong>
                        </li>
                    </ol>
                </ol>
                <p>
                    <strong>End of Agreement</strong>
                </p>
            </LegalContainer>

        </>

    )
}


export default Terms;