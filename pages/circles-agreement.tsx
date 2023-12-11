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



const CirclesAgreement: NextPage = () => {

    const router = useRouter()

    const language = router.locale;


    if (language == 'espanol') {
        return (
            <>
                <LegalContainer>
                    <p style={{ textAlign: 'center' }}>
                        <span style={{ color: '#7030a0' }}>
                            <strong>EL SIGUIENTE ACUERDO SE APLICA A LOS USUARIOS DE STORYPLACE QUE COMPARTEN UNA HISTORIA EN UN CÍRCULO DE MARCA O SOCIO.&nbsp;</strong>
                        </span>
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <strong>ACUERDO DE LICENCIA DE STORYPLACE, PBC PARA CREADORES DE CONTENIDO</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Este Acuerdo</strong>
                        <strong></strong>
                        <strong>(este
                        </strong>
                        <strong>
                            <em>"Acuerdo</em>
                        </strong>
                        <strong>") se realiza por y entre StoryPlace, PBC, una corporación de beneficio público de Delaware ("</strong>
                        <strong>
                            <em>Empresa</em>
                        </strong>
                        <strong>", "Nosotros", "Nos" o "StoryPlace") y los creadores de contenido ("</strong>
                        <strong>
                            <em>Usted</em>
                        </strong>
                        <strong>") que publican su trabajo con StoryPlace, (incluidos, entre otros, su aplicación "Círculos" a la que se unen los creadores de contenido, colectivamente "</strong>
                        <strong>
                            <em>Empresa</em>
                        </strong>
                        <strong>", "</strong>
                        <strong>
                            <em>Nosotros",</em>
                        </strong>
                        <strong>
                            "</strong>
                        <strong>
                            <em>Nos</em>
                        </strong>
                        <strong>" o
                        </strong>
                        <strong>
                            <em>"StoryPlace</em>
                        </strong>
                        <strong>").&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>El uso de StoryPlace de cualquier manera significa que usted acepta todos estos Términos, y estos Términos (en la medida en que se actualicen) permanecerán en vigor mientras utilice StoryPlace. Si no está de acuerdo con todo lo siguiente, no podrá usar StoryPlace ni acceder a él de ninguna manera.&nbsp;Usted declara y garantiza que es mayor de edad para celebrar un contrato vinculante (o, de no ser así, que ha recibido el permiso de sus padres o tutores para usar StoryPlace y que su padre o tutor acepta estos Términos en su nombre).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Si acepta estos Términos en nombre de una organización o entidad, declara y garantiza que está autorizado a aceptar estos Términos en nombre de esa organización o entidad y a vincularlos a estos Términos (en cuyo caso, las referencias a «usted» y «su» que aparecen en este documento se refieren a esa organización o entidad).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al enviar contenido a StoryPlace, usted comprende y reconoce que esta información está disponible para el público y que StoryPlace puede utilizarla con fines promocionales internos y externos. Tenga en cuenta que otros participantes y terceros pueden utilizar su información publicada fuera del control de StoryPlace. Si no desea que se utilice, publique, copie y/o reimprima la información que ha puesto a disposición a través de este sitio, no la publique aquí.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Licencia limitada a nosotros: Con el fin de mostrar su contenido y permitir que terceros lo disfruten, usted nos otorga ciertos derechos sobre su contenido. Si comparte su contenido en StoryPlace, nos otorga una licencia para traducir, modificar, reproducir y actuar de otro modo con respecto a su contenido a fin de que podamos proporcionarle, mejorar y notificarle sobre las nuevas funciones de StoryPlace. Usted comprende y acepta que es posible que necesitemos realizar cambios en su contenido para ajustarlo y adaptarlo a los requisitos técnicos de las redes, los dispositivos, los servicios o los medios, y esta licencia incluye los derechos para hacerlo. Si comparte su contenido en StoryPlace, nos concede la licencia para mostrar, reproducir y distribuir su contenido. Acepta que las licencias que concede están exentas de regalías, son perpetuas, irrevocables y de alcance mundial.&nbsp;Se trata únicamente de una licencia; su propiedad del contenido no se ve afectada. Esta licencia puede ser sublicenciada y/o asignada únicamente por StoryPlace.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Nos reservamos el derecho de eliminar cualquier contenido de StoryPlace en cualquier momento y por cualquier motivo (incluido, entre otros, si alguien alega que usted ha contribuido con ese contenido en violación de estos Términos), a nuestra entera discreción y sin previo aviso. Respetamos los derechos de propiedad intelectual de los demás y nos reservamos el derecho de eliminar o deshabilitar el contenido presuntamente infractor y de cerrar las cuentas de los presuntos infractores reincidentes. Usted se compromete a cumplir con los avisos de derechos de autor, las normas de marcas comerciales, la información y otras restricciones que pueda recibir de StoryPlace. Usted entiende que estos Términos no le otorgan ningún derecho, título o interés sobre StoryPlace ni sobre nuestras marcas comerciales, logotipos y demás propiedad intelectual.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>En el caso de que tenga una controversia con uno o más usuarios de StoryPlace o con un tercero, usted libera, indemniza y nos defenderá a nosotros, nuestros funcionarios, empleados, agentes, cesionarios, sublicenciatarios y sucesores de reclamos, demandas y daños de todo tipo o naturaleza, conocidos o desconocidos, sospechados o insospechados, revelados o no revelados, que surjan de o estén relacionados de alguna manera con dichas controversias y/o StoryPlace.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al enviar contenido a StoryPlace</strong>
                        <strong>, usted acepta que, en la medida en que lo permita la ley aplicable, bajo ninguna circunstancia ni bajo ninguna teoría legal StoryPlace, sus licenciantes o sus proveedores serán responsables ante usted o cualquier otra persona por:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Cualquier daño indirecto, especial, incidental o consecuente de cualquier tipo, o</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Cualquier importe, en conjunto, que supere lo que sea mayor de (1) 100$ o (2) los montos que nos haya pagado o adeudado en relación con StoryPlace en el período de doce meses anterior a la reclamación correspondiente.</strong>
                        </li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace se le proporciona «tal cual». Esto significa que se lo proporcionamos sin ninguna garantía expresa o implícita de ningún tipo. Esto incluye cualquier garantía implícita de comerciabilidad, de idoneidad para un fin determinado, de no infracción o cualquier garantía de que el uso de StoryPlace será ininterrumpido o estará libre de errores. En consecuencia, no declaramos ni garantizamos ningún contenido incluido o al que se acceda a través de StoryPlace, y no seremos responsables de la precisión, el cumplimiento de los derechos de autor, la legalidad o la decencia del material contenido en nuestros productos y servicios.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>El no acatamiento de cualquiera de estos Términos constituirá un incumplimiento de estos Términos, lo que puede resultar en la cancelación inmediata de su cuenta.&nbsp;StoryPlace tiene el derecho exclusivo de decidir si usted está infringiendo alguna de las restricciones establecidas en estos Términos.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al compartir su historia con StoryPlace (incluida la función de sus Círculos), acepta los términos del presente documento, así como los términos de nuestros afiliados, sublicenciatarios y cesionarios sin fines de lucro incorporados en este documento mediante esta referencia (cuyos términos se pueden encontrar aquí: [insertar hipervínculos] y previa solicitud) en la medida en que no entren en conflicto, y en caso de conflicto entre los términos materiales,&nbsp; los términos de StoryPlace prevalecerán.&nbsp;&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al enviar contenido a StoryPlace, usted acepta, en la medida máxima permitida por la ley aplicable, indemnizar, defender y eximir de responsabilidad a StoryPlace, sus afiliados, funcionarios, agentes, empleados y socios de y contra todos y cada uno de los reclamos, responsabilidades, daños (reales y consecuentes), pérdidas y gastos (incluidos los honorarios de abogados) que surjan o estén relacionados de alguna manera con cualquier reclamo de terceros relacionado con (sin limitación)
                        </strong>
                        <strong>(a) Su Contenido, incluida cualquier demanda, reclamación o acción por parte de otro Usuario Registrado o cualquier otro tercero que alegue que Su Contenido infringe cualquier derecho, incluidos los derechos de propiedad intelectual, derechos de autor y privacidad; (b) cualquier demanda, reclamación o acción relacionada con su uso de nuestros Servicios presentada contra cualquier Parte de STORYPLACE, incluyendo, sin limitación, cualquier demanda, reclamación o acción por parte de un Usuario, tercero y/o creador de contenido que alegue (i) robo de ideas, (ii) incumplimiento de un contrato implícito de hecho o (iii) infracción de propiedad intelectual o derechos de autor; (c) cualquier demanda, reclamación o acción por parte de otro Usuario Registrado o cualquier otro tercero que alegue que Su Contenido es difamatorio; (d) su uso o incapacidad de uso de cualquier Propiedad de STORYPLACE; (e) su violación del Acuerdo; (f) su violación de cualquier derecho de otra parte, incluidos, entre otros, los Usuarios Registrados; o (g) su violación de cualquier ley, norma o reglamento aplicable.&nbsp; STORYPLACE se reserva el derecho, a su propia costa, de asumir la defensa y el control exclusivos de cualquier asunto que de otro modo esté sujeto a una indemnización por su parte, en cuyo caso usted cooperará plenamente con STORYPLACE en hacer valer cualquier defensa disponible, sin que STORYPLACE renuncie a ninguno de los derechos de indemnización que se le adeudan a STORYPLACE. Usted acepta que las disposiciones de esta sección seguirán vigentes después de la terminación de su Cuenta, del Acuerdo o de su acceso a las Propiedades de STORYPLACE.</strong>
                        <strong>
                            Al enviar contenido a StoryPlace, usted acepta que no podrá ceder, delegar ni transferir estos Términos ni sus derechos u obligaciones en virtud del presente documento, ni su cuenta de StoryPlace, de ninguna manera (en virtud de la ley o de otro modo) sin nuestro consentimiento previo por escrito.&nbsp; Podemos transferir, ceder o delegar estos Términos y nuestros derechos y obligaciones sin su consentimiento.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Estos Términos se rigen por la legislación federal aplicable y las leyes del Estado de California, sin tener en cuenta los conflictos de disposiciones legales. Cualquier controversia que surja o esté relacionada con el objeto de estos Términos se resolverá finalmente mediante arbitraje en el condado de Los Ángeles (California), de conformidad con las Reglas y procedimientos de arbitraje simplificados de Judicial Arbitration and Mediation Services, Inc. («JAMS») en vigor en ese momento, por un árbitro comercial con una experiencia sustancial en la resolución de controversias de propiedad intelectual y contratos comerciales, que será seleccionado de la lista correspondiente de árbitros de JAMS de conformidad con las Reglas y procedimientos de arbitraje simplificados de JAMS. La sentencia sobre el laudo así dictado podrá ser presentada ante un tribunal competente, o podrá solicitarse a dicho tribunal la aceptación judicial de cualquier laudo y una orden de ejecución, según sea el caso. Sin perjuicio de lo anterior, usted acepta renunciar a su derecho a solicitar o iniciar una acción ante un tribunal competente para obtener medidas cautelares u otro tipo de compensación equitativa y acepta limitar todos los recursos que pueda interponer a la indemnización por daños y perjuicios.&nbsp;A todos los efectos de estos Términos, usted acepta someterse a la jurisdicción y competencia exclusivas de los tribunales estatales o federales ubicados, respectivamente, en el condado de Los Ángeles, California. La parte que prevalezca en cualquier acción o proceso judicial que surja de estos Términos tendrá derecho a una compensación en concepto de costas y honorarios de abogados externos. En la medida en que lo permita la ley, usted y StoryPlace aceptan que todas las demandas contra la otra parte solo pueden presentarse a título individual y no como demandantes o miembros de grupo en ningún supuesto proceso judicial colectivo, consolidado u otro proceso judicial representativo. Usted acepta que los árbitros no pueden llevar a cabo ningún proceso judicial colectivo, consolidado o representativo, y se limitan a proporcionar las medidas que justifique la demanda de una parte individual. Usted acepta que estos Términos no contemplan la existencia de terceros beneficiarios. Por la presente, usted reconoce y acepta que no es empleado, agente, socio o empresa conjunta de StoryPlace y que no tiene ninguna autoridad de ningún tipo que nos obligue en ningún aspecto.&nbsp;El hecho de que usted o nosotros no ejerzamos, de cualquier manera, cualquier derecho aquí establecido no se considerará una renuncia a ningún otro derecho en virtud del presente documento.&nbsp;&nbsp;Si se determina que alguna disposición de estos Términos es inaplicable o inválida, dicha disposición se limitará o eliminará, en la medida mínima necesaria, de modo que estos Términos permanezcan en pleno vigor y efecto y sean aplicables.&nbsp;&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Usted acepta que estos Términos son la declaración completa y exclusiva del entendimiento mutuo entre usted y nosotros, y que sustituyen y cancelan todos los acuerdos, comunicaciones y otros entendimientos anteriores escritos y orales relacionados con el objeto de estos Términos.&nbsp;&nbsp;Además, usted acepta que no publicará información privada de otras personas (como un número de teléfono personal o una dirección particular) sin su autorización y permiso expresos. También prohibimos amenazar con exponer información privada o incentivar a otros a hacerlo. La publicación de información de acceso público no constituye una violación de esta política.&nbsp; No permitimos ningún contenido de explotación sexual en StoryPlace, incluida ninguna descripción de actos sexuales con el único propósito de gratificación sexual.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Este Acuerdo es un contrato vinculante entre usted y StoryPlace. El uso de StoryPlace de cualquier manera significa que usted acepta este Acuerdo, y este Acuerdo permanecerá en vigor a menos que y hasta que lo rescindamos, con la condición de que, en caso de terminación por cualquier motivo, las obligaciones de indemnización que se nos adeudan en virtud del presente sobrevivirán a dicha terminación y permanecerán en pleno vigor y efecto. Si hay una controversia entre usted y un tercero sobre cualquier tema, usted acepta que no tenemos ninguna obligación de involucrarnos y que no seremos responsables de dicha controversia y que no le proporcionaremos ningún asesoramiento legal sobre dichos asuntos. Puede señalar cualquier violación de nuestros Términos de Uso enviando un correo electrónico a support@storyplace.com</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>En la medida en que no lo prohíba la ley, Usted adelantará los gastos incurridos por StoryPlace como indemnizado en relación con cualquier proceso judicial, y dicho adelanto se realizará dentro de los 20 días posteriores a la recepción por su parte de una declaración o declaraciones solicitando dichos anticipos con el compromiso de reembolsar el anticipo de gastos si y en la medida en que sea determinado en última instancia por un tribunal de jurisdicción competente en una sentencia definitiva, no está sujeto a apelación, que StoryPlace no tiene derecho a ser indemnizado por Usted.&nbsp; Los anticipos no estarán garantizados y sin intereses. Los anticipos incluirán todos y cada uno de los gastos en los que StoryPlace incurra real y razonablemente al emprender una acción para hacer valer su derecho a indemnización en virtud de este Acuerdo. El derecho a anticipos en virtud de esta Sección continuará hasta la disposición final de cualquier proceso judicial, incluida cualquier apelación en el mismo.&nbsp; Ni Usted ni StoryPlace negarán injustificadamente su consentimiento a ningún acuerdo propuesto;
                        </strong>
                        <strong>
                            <em>siempre que, sin embargo,</em>
                        </strong>
                        <strong>
                            StoryPlace pueda en cualquier caso negarse a dar su consentimiento (o admitir o aceptar cualquier responsabilidad de indemnización en virtud del presente con respecto a) cualquier acuerdo propuesto si también es parte en dicho proceso judicial y determina de buena fe que dicho acuerdo no es lo mejor para él.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Tal cual.</strong>
                        </span>
                        <strong>
                            USTED ENTIENDE Y ACEPTA EXPRESAMENTE QUE, EN LA MEDIDA EN QUE LO PERMITA LA LEY APLICABLE, EL USO QUE HAGA DE LAS PROPIEDADES DE STORYPLACE CORRE POR SU CUENTA Y RIESGO, Y QUE LAS PROPIEDADES DE STORYPLACE SE PROPORCIONAN «TAL CUAL» Y «SEGÚN SU DISPONIBILIDAD», CON TODOS SUS DEFECTOS. LAS PARTES DE STORYPLACE RENUNCIAN EXPRESAMENTE A TODAS LAS GARANTÍAS, DECLARACIONES Y CONDICIONES DE CUALQUIER TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS O CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO INFRACCIÓN QUE SURJAN DEL USO DEL SITIO WEB.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>LAS PARTES DE STORYPLACE NO GARANTIZAN, DECLARAN NI CONDICIONAN QUE: (1) LAS PROPIEDADES DE STORYPLACE CUMPLIRÁN CON SUS REQUISITOS O EXPECTATIVAS; (2) SU USO DE LAS PROPIEDADES DE STORYPLACE SERÁ ININTERRUMPIDO, PUNTUAL, SEGURO O LIBRE DE ERRORES; O (3) LOS RESULTADOS QUE SE PUEDAN OBTENER DEL USO DE LAS PROPIEDADES DE STORYPLACE SERÁN PRECISOS O CONFIABLES.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>EL ACCESO A CUALQUIER CONTENIDO DESCARGADO DE STORYPLACE O AL QUE SE ACCEDA DE CUALQUIER OTRA FORMA A TRAVÉS DE ESTE SE REALIZA POR SU CUENTA Y RIESGO, Y USTED SERÁ EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO A SU PROPIEDAD, INCLUIDOS, ENTRE OTROS, SU SISTEMA INFORMÁTICO Y CUALQUIER DISPOSITIVO QUE UTILICE PARA ACCEDER A LAS PROPIEDADES DE STORYPLACE, O DE CUALQUIER OTRA PÉRDIDA QUE RESULTE DEL ACCESO A DICHO CONTENIDO.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>LOS SERVICIOS PUEDEN ESTAR SUJETOS A RETRASOS, CANCELACIONES Y OTRAS INTERRUPCIONES. STORYPLACE NO OFRECE NINGUNA GARANTÍA, DECLARACIÓN O CONDICIÓN CON RESPECTO A LOS SERVICIOS, INCLUIDAS, ENTRE OTRAS, LA CALIDAD, LA EFICACIA, LA REPUTACIÓN Y OTRAS CARACTERÍSTICAS DE LOS SERVICIOS.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>NINGÚN CONSEJO O INFORMACIÓN, YA SEA ORAL O ESCRITA, OBTENIDO DE STORYPLACE O A TRAVÉS DE LAS PROPIEDADES DE STORYPLACE GENERARÁ NINGUNA GARANTÍA QUE NO ESTÉ EXPRESAMENTE ESTIPULADA EN ESTE DOCUMENTO.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>De vez en cuando, STORYPLACE puede ofrecer nuevas funciones o herramientas «beta» con las que los usuarios registrados pueden experimentar. Dichas funciones o herramientas se ofrecen únicamente con fines experimentales y sin garantía
                        </strong>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>de ningún tipo</strong>
                        </span>
                        <strong>, y pueden modificarse o discontinuarse a la entera y absoluta discreción de STORYPLACE.&nbsp; Las disposiciones de esta sección se aplican con plena vigencia a dichas funciones o herramientas.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Descargo de responsabilidad por la conducta de terceros</strong>
                        </span>
                        <strong>. USTED RECONOCE Y ACEPTA QUE LAS PARTES DE STORYPLACE NO SON RESPONSABLES, Y USTED ACEPTA NO TRATAR DE RESPONSABILIZAR A LAS PARTES DE STORYPLACE, POR LA CONDUCTA DE TERCEROS, INCLUIDOS LOS OPERADORES DE SITIOS EXTERNOS Y/O MARCAS DE TERCEROS, Y QUE EL RIESGO DE LESIONES DE DICHOS TERCEROS RECAE COMPLETAMENTE EN USTED.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Descargo de responsabilidad por la conducta de otros usuarios</strong>
                        </span>
                        <strong>. USTED ES EL ÚNICO RESPONSABLE DE TODAS SUS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE. USTED COMPRENDE QUE STORYPLACE NO INTENTA VERIFICAR LAS DECLARACIONES DE LOS USUARIOS DE LAS PROPIEDADES DE STORYPLACE.&nbsp; STORYPLACE NO HACE DECLARACIONES NI GARANTIZA LA CONDUCTA DE LOS USUARIOS DE LAS PROPIEDADES DE STORYPLACE NI SU COMPATIBILIDAD CON LOS USUARIOS ACTUALES O FUTUROS DE LAS PROPIEDADES DE STORYPLACE.&nbsp; USTED SE COMPROMETE A TOMAR PRECAUCIONES RAZONABLES EN TODAS LAS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE, ESPECIALMENTE SI DECIDE REUNIRSE FUERA DE LÍNEA O EN PERSONA.&nbsp; USTED RECONOCE Y ACEPTA QUE STORYPLACE NO VERIFICA LOS ANTECEDENTES DE NINGÚN USUARIO.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Descargo de responsabilidad por la conducta de los usuarios</strong>
                        </span>
                        <strong>. SI ES UN USUARIO, ES EL ÚNICO RESPONSABLE DE TODAS SUS COMUNICACIONES E INTERACCIONES CON OTROS USUARIOS, INCLUIDAS, ENTRE OTRAS, LAS INTERACCIONES RELACIONADAS CON CUALQUIER HISTORIA, EL ACCESO A DICHAS HISTORIAS Y SU PRESENTACIÓN, Y CUALQUIER COMUNICACIÓN O ACUERDO RELACIONADO (PERO SIN LIMITARSE A) LA ADQUISICIÓN DE CUALQUIER DERECHO, TÍTULO O INTERÉS EN DICHAS HISTORIAS.</strong>
                        <strong>
                            EN CASO DE QUE UN TERCERO VIOLE SUS DERECHOS DE AUTOR U OTROS DERECHOS QUE LE CORRESPONDAN EN VIRTUD DEL PRESENTE, USTED ACEPTA QUE STORYPLACE QUEDA LIBERADO DE TODA RESPONSABILIDAD RELACIONADA CON EL MISMO Y USTED RENUNCIA A TODOS LOS DERECHOS CONTRA STORYPLACE EN EQUIDAD Y EN DERECHO, RENUNCIA QUE SOBREVIVIRÁ A LA TERMINACIÓN DEL PRESENTE.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Descargo de responsabilidad por ciertos daños</strong>
                        </span>
                        <strong>. USTED ENTIENDE Y ACEPTA QUE, EN NINGÚN CASO, LAS PARTES DE STORYPLACE SERÁN RESPONSABLES DE NINGUNA PÉRDIDA DE BENEFICIOS, INGRESOS O DATOS, DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES, NI DE LOS DAÑOS O COSTOS DEBIDOS A LA PÉRDIDA DE PRODUCCIÓN O USO, LA INTERRUPCIÓN DE LA ACTIVIDAD COMERCIAL, LA ADQUISICIÓN DE BIENES O SERVICIOS SUSTITUTIVOS, EN CUALQUIER CASO, INDEPENDIENTEMENTE DE QUE STORYPLACE HAYA SIDO INFORMADA O NO DE LA POSIBILIDAD DE DICHOS DAÑOS, QUE SURJAN O ESTÉN RELACIONADOS CON EL ACUERDO O CUALQUIER COMUNICACIÓN, INTERACCIÓN O REUNIÓN CON OTROS USUARIOS DE LAS PROPIEDADES DE STORYPLACE, SEGÚN CUALQUIER TEORÍA DE LA RESPONSABILIDAD LEGAL, RESULTANDO DE: (1) EL USO O LA IMPOSIBILIDAD DE USAR LAS PROPIEDADES DE STORYPLACE; (2) EL COSTO DE ADQUISICIÓN DE BIENES O SERVICIOS SUSTITUTIVOS RESULTANTE DE CUALQUIER BIEN, DATO, INFORMACIÓN O SERVICIO COMPRADO U OBTENIDO O DE LOS MENSAJES RECIBIDOS POR TRANSACCIONES REALIZADAS A TRAVÉS DE LAS PROPIEDADES DE STORYPLACE; (3) EL ACCESO NO AUTORIZADO O LA ALTERACIÓN DE SUS TRANSMISIONES O DATOS; (4) LAS DECLARACIONES O LA CONDUCTA DE CUALQUIER TERCERO SOBRE LAS PROPIEDADES DE STORYPLACE; O (5) CUALQUIER OTRO ASUNTO RELACIONADO CON LAS PROPIEDADES DE STORYPLACE, YA BASADO EN LA GARANTÍA, LOS DERECHOS DE AUTOR, EL CONTRATO, LA RESPONSABILIDAD EXTRACONTRACTUAL (INCLUIDA LA NEGLIGENCIA) Y LA RESPONSABILIDAD POR PRODUCTOS DEFECTUOSOS O CUALQUIER OTRA TEORÍA JURÍDICA.&nbsp; LA LIMITACIÓN DE RESPONSABILIDAD ANTERIOR NO SE APLICARÁ A LA RESPONSABILIDAD DE UNA PARTE DE STORYPLACE POR (A) LA MUERTE O LAS LESIONES PERSONALES CAUSADAS POR UNA NEGLIGENCIA GRAVE DE UNA PARTE DE STORYPLACE; NI A (B) NINGUNA LESIÓN CAUSADA POR UN FRAUDE O TERGIVERSACIÓN FRAUDULENTA DE UNA PARTE DE STORYPLACE</strong>
                        <strong>.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Límite de responsabilidad</strong>
                        </span>
                        <strong>. BAJO NINGUNA CIRCUNSTANCIA, LAS PARTES DE STORYPLACE SERÁN RESPONSABLES ANTE USTED
                        </strong>
                        <strong>(INCLUIDOS TODOS LOS HONORARIOS Y COSTOS LEGALES Y DE COBRANZA)
                        </strong>
                        <strong>POR UNA CANTIDAD SUPERIOR A (A) LA CANTIDAD TOTAL PAGADA A STORYPLACE por usted durante el período de un mes anterior al acto, omisión o suceso que dé lugar a dicha responsabilidad y (B) EL RECURSO O LA SANCIÓN IMPUESTOS POR LA LEY EN VIRTUD DEL CUAL SURJA DICHA DEMANDA. &nbsp; EL LÍMITE DE RESPONSABILIDAD ANTERIOR NO SE APLICARÁ A LA RESPONSABILIDAD DE UNA PARTE DE STORYPLACE POR (A) LA MUERTE O LAS LESIONES PERSONALES CAUSADAS POR LA NEGLIGENCIA GRAVE DE UNA PARTE DE STORYPLACE; NI POR (B) NINGUNA LESIÓN CAUSADA POR EL FRAUDE O LA TERGIVERSACIÓN FRAUDULENTA DE UNA PARTE DE STORYPLACE.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Vigencia.</strong>
                        </span>
                        <strong>
                            El Acuerdo comienza en la fecha en que usted lo acepta (tal como se describe anteriormente) y permanece en pleno vigor y efecto mientras utilice las Propiedades de STORYPLACE, a menos que se rescinda antes, de conformidad con el Acuerdo, al tiempo que garantiza, acepta y reconoce que ciertas disposiciones que se le deban a STORYPLACE, tal como se estipula en este documento, sobrevivirán a dicha terminación o vencimiento.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Separabilidad.</strong>
                        </span>
                        <strong>
                            <em></em>
                        </strong>
                        <strong>Si la ley determina que alguna parte o partes de este Acuerdo son inválidas o inaplicables, dicha parte o partes específicas no tendrán vigencia ni efecto y se separarán y el resto del Acuerdo continuará en pleno vigor y efecto.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Continuidad contractual del Acuerdo</strong>
                        </span>
                        <strong>
                            <em>.
                            </em>
                        </strong>
                        <strong>El presente Acuerdo seguirá vigente tras la terminación de su relación con STORYPLACE.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Modificación</strong>
                        </span>
                        <strong>. Sin perjuicio de cualquier disposición de este Acuerdo que indique lo contrario, aceptamos que, si STORYPLACE realiza algún cambio material en el futuro en este Acuerdo, usted podrá rechazar dicho cambio POR ESCRITO en un plazo de treinta (30) días a partir de la entrada en vigor de dicho cambio escribiendo a STORYPLACE a la siguiente dirección: StoryPlace HQ,
                        </strong>
                        <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
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
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Cesión</strong>
                        </span>
                        <strong>. Usted no podrá ceder, subcontratar, delegar ni transferir de otro modo el Acuerdo ni sus derechos y obligaciones en virtud del presente documento sin el consentimiento previo por escrito de STORYPLACE, que se negará a su entera y absoluta discreción, y cualquier intento de cesión, subcontratación, delegación o transferencia que infrinja lo anterior se considerará inmediatamente nulo y sin efecto ab initio.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Fuerza mayor.</strong>
                        </span>
                        <strong>
                            STORYPLACE no será responsable de ningún retraso o incumplimiento derivado de causas ajenas a su control razonable, incluidos, entre otros, casos fortuitos, guerras, terrorismo, disturbios, embargos, actos de las autoridades civiles o militares, incendios, inundaciones, pandemias, epidemias, accidentes, huelgas o escasez de medios de transporte, combustible, energía, mano de obra o materiales.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Notificación</strong>
                        </span>
                        <strong>. Cuando STORYPLACE requiera que proporcione una dirección de correo electrónico, usted es responsable de proporcionar a STORYPLACE su dirección de correo electrónico más reciente.&nbsp; En caso de que la última dirección de correo electrónico que proporcionó a STORYPLACE no sea válida o, por cualquier motivo, no pueda enviarle las notificaciones exigidas o permitidas por el Acuerdo, el envío por parte de STORYPLACE del correo electrónico que contenga dicha notificación constituirá, no obstante, una notificación efectiva.&nbsp; Puede enviar una notificación a STORYPLACE a la siguiente dirección: StoryPlace HQ,
                        </strong>
                        <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211. &nbsp;
                        </strong>
                        <strong>Dicha notificación se considerará entregada cuando STORYPLACE la reciba mediante carta entregada por un servicio de entrega al día siguiente reconocido a nivel nacional o por correo prepagado con franqueo de primera clase a la dirección anterior.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Renuncia</strong>
                        </span>
                        <strong>. Cualquier renuncia o falta de cumplimiento de cualquier disposición del Acuerdo en una ocasión no se considerará una renuncia a ninguna otra disposición ni a dicha disposición en ninguna otra ocasión.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Acuerdo completo.</strong>
                        </span>
                        <strong>
                            El presente Acuerdo es el acuerdo final, completo y exclusivo de las partes con respecto al objeto del presente documento y reemplaza y fusiona todas las discusiones previas entre las partes con respecto a dicho tema.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Disposiciones internacionales. Las siguientes disposiciones se aplicarán solo si se encuentra en los países que se enumeran a continuación.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Reino Unido</strong>
                        </span>
                        <strong>. Un tercero que no sea parte en el Acuerdo no tiene derecho, en virtud de la Ley de Contratos (Derechos de Terceros) de 1999, a hacer cumplir ninguna disposición del Acuerdo, pero esto no afecta a ningún derecho o recurso de dicho tercero que exista o esté disponible aparte de esa Ley.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Alemania</strong>
                        </span>
                        <strong>. No obstante lo dispuesto en el presente documento, STORYPLACE tampoco se hace responsable de los actos de negligencia simple (a menos que causen lesiones o la muerte a una persona), excepto cuando estén causados por el incumplimiento de cualquier obligación contractual sustancial por parte de StoryPlace (vertragswesentliche Pflichten).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>[INSERTAR BLOQUES DE FIRMA/FIRMAS SHRINKWRAP]</strong>
                    </p>
                </LegalContainer>
            </>
        );
    }


    return (
        <>
            <LegalContainer>
                <p style={{ textAlign: 'center' }}>
                    <span style={{ color: '#7030a0' }}>
                        <strong>THE FOLLOWING AGREEMENT IS APPLICABLE TO STORYPLACE USERS WHO SHARE A STORY IN A BRANDED OR PARTNER CIRCLE.&nbsp;</strong>
                    </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                    <strong>STORYPLACE, PBC LICENSE AGREEMENT FOR CONTENT CREATORS</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>This Agreement</strong>
                    <strong></strong>
                    <strong>(this “</strong>
                    <strong>
                        <em>Agreement</em>
                    </strong>
                    <strong>”) is made by and between StoryPlace, PBC, a Delaware public benefit corporation (“</strong>
                    <strong>
                        <em>Company</em>
                    </strong>
                    <strong>” “</strong>
                    <strong>
                        <em>We</em>
                    </strong>
                    <strong>” “</strong>
                    <strong>
                        <em>Us”</em>
                    </strong>
                    <strong>
                        or “</strong>
                    <strong>
                        <em>StoryPlace</em>
                    </strong>
                    <strong>”) and content creators (“</strong>
                    <strong>
                        <em>You</em>
                    </strong>
                    <strong>”) who publish their work with StoryPlace, (including but not limited to its “Circles” App to which content creators join, collectively “</strong>
                    <strong>
                        <em>Company</em>
                    </strong>
                    <strong>” “</strong>
                    <strong>
                        <em>We”</em>
                    </strong>
                    <strong>
                        “</strong>
                    <strong>
                        <em>Us</em>
                    </strong>
                    <strong>” or “</strong>
                    <strong>
                        <em>StoryPlace</em>
                    </strong>
                    <strong>”).&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Using StoryPlace in any way means that you agree to all of these Terms, and these Terms (as may be updated) will remain in effect while you use StoryPlace. If you don’t agree to all of the following, you may not use or access StoryPlace in any manner.&nbsp;You represent and warrant that you are of legal age to form a binding contract (or if not, that you’ve received your parent’s or guardian’s permission to use StoryPlace and that your parent or guardian agrees to these Terms on your behalf).&nbsp;</strong>
                    <strong>If you’re agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” throughout this document refer to that organization or entity).</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By submitting content to StoryPlace, you understand and acknowledge that this information is available to the public, and that StoryPlace may use this information for internal and external promotional purposes. Please note that other participants and third parties may use your posted information beyond the control of StoryPlace. If you do not wish to have the information you have made available via this site used, published, copied and/or reprinted, please do not post it here.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Limited License to Us: In order to display your content, and to allow third parties to enjoy it, you grant us certain rights in your content. If you share your content on StoryPlace, You hereby grant us a license to translate, modify, reproduce, and otherwise act with respect to your content to enable us to provide, improve, and notify you about new features within StoryPlace. You understand and agree that we may need to make changes to your content to conform and adapt it to the technical requirements of networks, devices, services, or media, and this license includes the rights to do so. If you share your content on StoryPlace,&nbsp; you grant us the license to display, perform, and distribute your content. You agree that the licenses you grant are royalty-free, perpetual, irrevocable, and worldwide.&nbsp;This is a license only – your ownership in the content is not affected. This license may be sub-licensed and/or assigned solely by StoryPlace.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>We reserve the right to remove any content from StoryPlace at any time, for any reason (including, but not limited to, if someone alleges you contributed that content in violation of these Terms), in our sole discretion, and without notice. We respect others’ intellectual property rights, and we reserve the right to delete or disable content alleged to be infringing, and to terminate the accounts of repeat alleged infringers. You promise to abide by copyright notices, trademark rules, information, and other restrictions you may receive from StoryPlace. You understand that these Terms don’t grant you any right, title or interest in StoryPlace or our trademarks, logos, and other intellectual property.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>In the event that you have a dispute with one or more other users of StoryPlace or with a third party, you release, indemnify and shall defend us, our officers, employees, agents, assigns, sub-licensees and successors from claims, demands, and damages of every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes and/or StoryPlace.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By submitting content to StoryPlace</strong>
                    <strong>, you agree that to the fullest extent allowed by applicable law, under no circumstances and under no legal theory shall StoryPlace, its licensors, or its suppliers be liable to you or to any other person for:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Any indirect, special, incidental, or consequential damages of any kind, or</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>Any amount, in the aggregate, in excess of the greater of (1) $100 or (2) the amounts paid and/or payable by you to us in connection with StoryPlace in the twelve-month period preceding the applicable claim.</strong>
                    </li>
                </ul>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace is provided to you on an “as-is” basis. This means we provide it to you without any express or implied warranties of any kind. That includes any implied warranties of merchantability, warranties of fitness for a particular purpose, non-infringement, or any warranty that the use of StoryPlace will be uninterrupted or error-free. Accordingly, we do not make any representations or warranties about any content contained in or accessed through StoryPlace, and we will not be responsible for the accuracy, copyright compliance, legality, or decency of material contained on our products and services.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Failure to follow any of these Terms shall constitute a breach of these Terms, which may result in immediate termination of your account.&nbsp;StoryPlace has the sole right to decide whether you are in violation of any of the restrictions set forth in these Terms.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By sharing your story with StoryPlace (including its Circles’ function) You agree to the terms herein as well as to the terms of our non-profit affiliates, sub-licensees and assigns incorporated herein by this reference (which terms may be found here: [insert hyperlinks] and upon request) to the degree they do not conflict, and in case of conflict between material terms, the terms of StoryPlace shall supersede.&nbsp;&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By submitting content to StoryPlace, you agree to the fullest extent allowed by applicable law, to indemnify, defend and hold harmless StoryPlace, its affiliates, officers, agents, employees, and partners from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to any third party claims relating to (without limitation)
                    </strong>
                    <strong>(a) Your Content, including any lawsuit, claim or action by another Registered User or any other third party alleging that Your Content infringes any rights, including intellectual property, copyright and privacy rights; (b) any lawsuit, claim or action relating to your use of our Services brought against any STORYPLACE Party, including without limitation any lawsuit, claim or action by a User, third party and/or content creator alleging (i) idea theft, (ii) breach of an implied-in-fact contract or (iii) intellectual property or copyright infringement; (c) any lawsuit, claim or action by another Registered User or any other third party alleging that Your Content is defamatory; (d) your use of, or inability to use, any STORYPLACE Property; (e) your violation of the Agreement; (f) your violation of any rights of another party, including without limitation any Registered Users; or (g) your violation of any applicable laws, rules or regulations.&nbsp; STORYPLACE reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with STORYPLACE in asserting any available defenses, without STORYPLACE waiving any of its indemnification rights owed STORYPLACE. You agree that the provisions in this section will survive any termination of your Account, the Agreement and/or your access to STORYPLACE Properties</strong>
                    <strong>. By submitting content to StoryPlace, you agree that you may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your StoryPlace account, in any way (by operation of law or otherwise) without our prior written consent.&nbsp; We may transfer, assign, or delegate these Terms and our rights and obligations without your consent.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>These Terms are governed by and will be construed under applicable federal law and the laws of the State of California, without regard to the conflicts of laws’ provisions thereof. Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in Los Angeles County, California, in accordance with the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with the Streamlined Arbitration Rules and Procedures of JAMS. Judgment upon the award so rendered may be entered in a court having jurisdiction, or application may be made to such court for judicial acceptance of any award and an order of enforcement, as the case may be. Notwithstanding the foregoing, you agree to waive your rights to seek or actually institute an action in a court of proper jurisdiction for injunctive or other equitable relief and agree to limit all recourse you may seek to monetary damages at law.&nbsp; For all purposes of these Terms, you consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, Los Angeles County, California. The prevailing party in any action or proceeding arising out of these Terms will be entitled to an award of costs and outside attorneys’ fees. To the fullest extent permitted by law, you and StoryPlace agree that all claims against the other can only be brought in an individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or other representative proceeding. You agree that arbitrators may not conduct any class, consolidated, or representative proceeding, and are limited to providing relief warranted by an individual party's claim. You agree there are no third-party beneficiaries intended under these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of StoryPlace and you do not have any authority of any kind to bind us in any respect whatsoever.&nbsp;The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder.&nbsp;&nbsp;If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable.&nbsp;&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>You agree that these Terms are the complete and exclusive statement of the mutual understanding between you and us, and that it supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the subject matter of these Terms.&nbsp;&nbsp;Furthermore, you agree that you shall not publish or post other people's private information (such as a personal phone number or home address) without their express authorization and permission. We also prohibit threatening to expose private information or incentivizing others to do so. The publication of publicly accessible information is not a violation of this policy.&nbsp; We don’t allow any sexually exploitative content on StoryPlace including any descriptions of sexual acts for the sole purpose of sexual gratification.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>This Agreement is a binding contract between you and StoryPlace. Using StoryPlace in any way means that you agree to this Agreement, and this Agreement will remain in effect unless and until we terminate it, with the proviso that in case of termination for any reason, the indemnification obligations owed us hereunder shall survive such termination and remain in full force and effect. If there is a dispute between you and any third party on any issue, you agree we are under no obligation to become involved and that we will not be held liable for any such dispute and we won’t provide you with any legal advice regarding such matters. You can flag any violations of our Terms of Use by sending an email to support@storyplace.com</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>To the extent not prohibited by law, You will advance the expenses incurred by StoryPlace as indemnitee in connection with any proceeding, and such advancement will be made within 20 days after the receipt by You of a statement or statements requesting such advances with an undertaking to repay the advancement of expenses if and to the extent that it is ultimately determined by a court of competent jurisdiction in a final judgment, not subject to appeal, that StoryPlace is not entitled to be indemnified by You.&nbsp; Advances will be unsecured and interest free. Advances will include any and all expenses actually and reasonably incurred by StoryPlace pursuing an action to enforce its right to indemnification under this Agreement. The right to advances under this Section will continue until final disposition of any proceeding, including any appeal therein.&nbsp; Neither You nor StoryPlace will unreasonably withhold consent to any proposed settlement;
                    </strong>
                    <strong>
                        <em>provided, however</em>
                    </strong>
                    <strong>, that StoryPlace may in any event decline to consent to (or to otherwise admit or agree to any liability for indemnification hereunder in respect of) any proposed settlement if it is also a party in such proceeding and determines in good faith that such settlement is not in its best interest.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>As Is</strong>
                    </span>
                    <strong>. YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF STORYPLACE PROPERTIES IS AT YOUR SOLE RISK, AND STORYPLACE PROPERTIES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITH ALL FAULTS. STORYPLACE PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARISING FROM USE OF THE WEBSITE.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>STORYPLACE PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) STORYPLACE PROPERTIES WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS; (2) YOUR USE OF STORYPLACE PROPERTIES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; OR (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF STORYPLACE PROPERTIES WILL BE ACCURATE OR RELIABLE.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>ANY CONTENT DOWNLOADED FROM OR OTHERWISE ACCESSED THROUGH STORYPLACE PROPERTIES IS ACCESSED AT YOUR OWN RISK, AND YOU SHALL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY, INCLUDING, BUT NOT LIMITED TO, YOUR COMPUTER SYSTEM AND ANY DEVICE YOU USE TO ACCESS STORYPLACE PROPERTIES, OR ANY OTHER LOSS THAT RESULTS FROM ACCESSING SUCH CONTENT.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>THE SERVICES MAY BE SUBJECT TO DELAYS, CANCELLATIONS AND OTHER DISRUPTIONS. STORYPLACE MAKES NO WARRANTY, REPRESENTATION OR CONDITION WITH RESPECT TO SERVICES, INCLUDING BUT NOT LIMITED TO, THE QUALITY, EFFECTIVENESS, REPUTATION AND OTHER CHARACTERISTICS OF SERVICES.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM STORYPLACE OR THROUGH STORYPLACE PROPERTIES WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>From time to time, STORYPLACE may offer new “beta” features or tools with which its registered users may experiment. Such features or tools are offered solely for experimental purposes and without any warranty
                    </strong>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>of any kind</strong>
                    </span>
                    <strong>, and may be modified or discontinued at STORYPLACE’s sole and absolute discretion.&nbsp; The provisions of this section apply with full force to such features or tools.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>No Liability for Conduct of Third Parties</strong>
                    </span>
                    <strong>. YOU ACKNOWLEDGE AND AGREE THAT STORYPLACE PARTIES ARE NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD STORYPLACE PARTIES LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND/OR THIRD PARTY BRANDS, AND THAT THE RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>No Liability for Conduct of Other Users</strong>
                    </span>
                    <strong>. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF STORYPLACE PROPERTIES. YOU UNDERSTAND THAT STORYPLACE DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF STORYPLACE PROPERTIES.&nbsp; STORYPLACE MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF USERS OF STORYPLACE PROPERTIES OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS OF STORYPLACE PROPERTIES.&nbsp; YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF STORYPLACE PROPERTIES, PARTICULARLY IF YOU DECIDE TO MEET OFFLINE OR IN PERSON.&nbsp; YOU ACKNOWLEDGE AND AGREE THAT STORYPLACE DOES NOT CONDUCT BACKGROUND CHECKS ON ANY USER.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>No Liability for Conduct of Users</strong>
                    </span>
                    <strong>. IF YOU ARE A USER, YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS, INCLUDING WITHOUT LIMITATION INTERACTIONS RELATING TO ANY STORIES, ACCESS TO AND SUBMISSION OF SUCH STORIES, AND ANY COMMUNICATIONS OR AGREEMENTS RELATING TO (BUT NOT LIMITED TO) THE ACQUISITION OF ANY RIGHT, TITLE OR INTEREST IN SUCH STORIES.</strong>
                    <strong>
                        SHOULD A THIRD PARTY VIOLATE YOUR COPYRIGHTS OR OTHER RIGHTS ENTITLED YOU HEREUNDER, YOU AGREE THAT STORYPLACE IS RELEASED OF ALL LIABILITY RELATED THERETO AND YOU WAIVE ALL RIGHTS AGAINST STORYPLACE IN EQUITY AND AT LAW, WHICH WAIVER SHALL SURVIVE TERMINATION HEREOF.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Disclaimer of Certain Damages</strong>
                    </span>
                    <strong>. YOU UNDERSTAND AND AGREE THAT IN NO EVENT SHALL STORYPLACE PARTIES BE LIABLE FOR ANY LOSS OF PROFITS, REVENUE OR DATA, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, OR DAMAGES OR COSTS DUE TO LOSS OF PRODUCTION OR USE, BUSINESS INTERRUPTION, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, IN EACH CASE WHETHER OR NOT STORYPLACE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THE AGREEMENT OR ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH OTHER USERS OF STORYPLACE PROPERTIES, ON ANY THEORY OF LIABILITY, RESULTING FROM: (1) THE USE OR INABILITY TO USE STORYPLACE PROPERTIES; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED FOR TRANSACTIONS ENTERED INTO THROUGH STORYPLACE PROPERTIES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (4) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON STORYPLACE PROPERTIES; OR (5) ANY OTHER MATTER RELATED TO STORYPLACE PROPERTIES, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.&nbsp; THE FOREGOING LIMITATION ON LIABILITY SHALL NOT APPLY TO LIABILITY OF A STORYPLACE PARTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A STORYPLACE PARTY’S GROSS NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A STORYPLACE PARTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Cap on Liability</strong>
                    </span>
                    <strong>. UNDER NO CIRCUMSTANCES WILL STORYPLACE PARTIES BE LIABLE TO YOU
                    </strong>
                    <strong>(INCLUDING ALL LEGAL AND COLLECTION FEES AND COSTS)
                    </strong>
                    <strong>FOR MORE THAN THE GREATER OF (A) THE TOTAL AMOUNT PAID TO STORYPLACE by you during the one-month period prior to the act, omission or occurrence giving rise to such liability and (B) THE REMEDY OR PENALTY IMPOSED BY THE STATUTE UNDER WHICH SUCH CLAIM ARISES. &nbsp; THE FOREGOING CAP ON LIABILITY SHALL NOT APPLY TO LIABILITY OF A STORYPLACE PARTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A STORYPLACE PARTY’S GROSS NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A STORYPLACE PARTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Term</strong>
                    </span>
                    <strong>. The Agreement commences on the date when you accept it (as described above) and remain in full force and effect while you use STORYPLACE Properties, unless terminated earlier in accordance with the Agreement, whilst ensuring, agreeing and acknowledging that certain provisions owed STORYPLACE, as stipulated herein shall survive such termination or expiry.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Severability</strong>
                    </span>
                    <strong>
                        <em>.
                        </em>
                    </strong>
                    <strong>If any part or parts of this Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Survival of Agreement</strong>
                    </span>
                    <strong>
                        <em>.
                        </em>
                    </strong>
                    <strong>This Agreement will survive the termination of your relationship with STORYPLACE.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Modification</strong>
                    </span>
                    <strong>. Notwithstanding any provision in this Agreement to the contrary, we agree that if STORYPLACE makes any future material change to this Agreement, you may reject IN WRITING that change within thirty (30) days of such change becoming effective by writing STORYPLACE at the following address: StoryPlace HQ,
                    </strong>
                    <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Release</strong>
                    </span>
                    <strong>. You hereby release STORYPLACE Parties and their successors and assigns from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from your use of STORYPLACE Properties, including but not limited to, any interactions with or conduct of other users or third-party websites of any kind arising in connection with or as a result of the Agreement or your use of STORYPLACE Properties. If you are a California resident, you hereby waive California Civil Code Section 1542, which states,
                    </strong>
                    <strong>
                        <em>“A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party</em>
                    </strong>
                    <strong>
                        <em>.”</em>
                    </strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Assignment</strong>
                    </span>
                    <strong>. The Agreement, and your rights and obligations hereunder, may not be assigned, subcontracted, delegated or otherwise transferred by you without STORYPLACE’s prior written consent, to be withheld in its sole and absolute discretion, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be immediately deemed null and void ab initio.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Force Majeure</strong>
                    </span>
                    <strong>. STORYPLACE shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, pandemics, epidemics, accidents, strikes or shortages of transportation facilities, fuel, energy, labor or materials.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Notice</strong>
                    </span>
                    <strong>. Where STORYPLACE requires that you provide an e-mail address, you are responsible for providing STORYPLACE with your most current e-mail address.&nbsp; In the event that the last e-mail address you provided to STORYPLACE is not valid, or for any reason is not capable of delivering to you any notices required/ permitted by the Agreement, STORYPLACE’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice.&nbsp; You may give notice to STORYPLACE at the following address: StoryPlace HQ,
                    </strong>
                    <strong>8549 Wilshire Blvd, Unit #3014, Beverly Hills, CA 90211.&nbsp; Such
                    </strong>
                    <strong>notice shall be deemed given when received by STORYPLACE by letter delivered by nationally recognized overnight delivery service or first class postage prepaid mail at the above address.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Waiver</strong>
                    </span>
                    <strong>. Any waiver or failure to enforce any provision of the Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Entire Agreement</strong>
                    </span>
                    <strong>. The Agreement is the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>International Provisions. The following provisions shall apply only if you are located in the countries listed below.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>United Kingdom</strong>
                    </span>
                    <strong>. A third party who is not a party to the Agreement has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any provision of the Agreement, but this does not affect any right or remedy of such third party which exists or is available apart from that Act.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ textDecoration: 'underline' }}>
                        <strong>Germany</strong>
                    </span>
                    <strong>. Notwithstanding anything to the contrary herein, STORYPLACE is also not liable for acts of simple negligence (unless they cause injuries to or death of any person), except when they are caused by a breach of any substantial contractual obligations by StoryPlace (vertragswesentliche Pflichten).</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>[INSERT SIGNATURE BLOCKS/SHRINKWRAP SINGATURES]</strong>
                </p>

            </LegalContainer>

        </>

    )
}


export default CirclesAgreement;