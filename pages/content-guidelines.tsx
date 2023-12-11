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



const ContentGuidelines: NextPage = () => {

    const router = useRouter()

    const language = router.locale;


    if (language == 'espanol') {
        return (
            <>
                <LegalContainer>
                    <h2 style={{ textAlign: 'center' }}>Pautas de Contenido</h2>
                    <h3>Antes de empezar.</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Antes de publicar cualquier contenido en cualquiera de las plataformas de StoryPlace (en adelante, "StoryPlace"), le pedimos que lea nuestras Pautas de Contenido. Si su contenido no cumple con estas pautas, puede eliminarse en cualquier momento.</strong>
                        <strong></strong>
                        <strong>Usted es propietario de todos los derechos del contenido que cree y publique en todas las plataformas de StoryPlace. Sin embargo, no envíe contenido del que no sea titular de los derechos de autor, a menos que tenga permiso, incluso para conceder a StoryPlace todos los derechos descritos en estos términos.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Cuando publica contenido en StoryPlace, necesitamos el permiso legal en virtud de las leyes de derechos de autor aplicables para mostrar ese contenido a los usuarios de las plataformas de StoryPlace. Legalmente, esto significa que nos otorga una licencia no exclusiva para publicar su contenido en los Servicios de StoryPlace, que incluye todo lo que esté razonablemente relacionado con su publicación (como almacenarlo, mostrarlo, reformatearlo y distribuirlo), así como para usarlo con contenido relacionado con el marketing (redes sociales, campañas, relaciones públicas y boletines informativos).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Usted es responsable del contenido que publica. Esto significa que usted asume todos los riesgos relacionados con su publicación y visualización, incluida la confianza de otra persona en su precisión y cualquier reclamación relacionada con la propiedad intelectual u otros derechos legales.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Lea nuestra guía sobre Derechos de autor para obtener más información.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Las opiniones y puntos de vista expresados en estas páginas no reflejan en modo alguno las opiniones del sitio en el que se publican, de otros sitios afiliados al sitio, del personal involucrado en el mantenimiento del sitio ni de ningún miembro del sitio.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace se reserva el derecho exclusivo de revisar, editar y/o eliminar cualquier contenido que considere inapropiado, a su entera y absoluta discreción. Los moderadores pueden eliminar o editar los comentarios que incluyan, entre otros, los siguientes:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Comentarios abusivos o hirientes sobre otras personas;</strong>
                        </li>
                        <li>
                            <strong>Comentarios que utilicen lenguaje grosero o «incitación al odio» (por ejemplo, entre otros, lenguaje ofensivo por motivos raciales, étnicos o de género);</strong>
                        </li>
                        <li>
                            <strong>Ataques personales o declaraciones difamatorias;</strong>
                        </li>
                        <li>
                            <strong>Comentarios que violen la privacidad de cualquier persona;</strong>
                        </li>
                        <li>
                            <strong>Promoción de la autolesión o el suicidio.&nbsp;</strong>
                        </li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Queremos evitar que las personas celebren o promuevan la autolesión. También debemos considerar la seguridad de las personas que puedan ver esas publicaciones, las cuales podrían desencadenar pensamientos de autolesión o suicidio en otros. No queremos que las personas compartan contenido que promueva la autolesión, pero tampoco queremos avergonzar o provocar a la persona que publicó dicho contenido al eliminar su publicación. En consecuencia, nos reservamos el derecho de restringir el contenido a personas mayores de 13 años y legalmente capaces de celebrar acuerdos legales vinculantes como personas en edad de consentimiento y construcción de contenidos, incluir una pantalla de sensibilidad y proporcionar recursos para que la gente sea consciente de que el contenido puede ser perturbador.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Si tiene ideas suicidas, póngase en contacto con la Línea 988 de Prevención del Suicidio y Crisis y con Crisis Text Line (que se enumeran a continuación) o con los números de teléfono locales para situaciones de crisis.</strong>
                    </p>
                    <h4>Línea 988 de Prevención del Suicidio y Crisis</h4>
                    <h4>Marque 988</h4>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>La Línea 988 de Prevención del Suicidio y Crisis es una línea directa para personas en crisis o para quienes buscan ayudar a otra persona. Para hablar con un oyente capacitado, llame al 988. Visite&nbsp;</strong>
                        <a target="_blank" href="https://988lifeline.org" rel="noreferrer">
                            <strong>988lifeline.org</strong>
                        </a>
                        <strong>para ver los servicios de chat en caso de crisis o para obtener más información.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al enviar contenido a StoryPlace, usted comprende y reconoce que esta información está disponible para el público y que StoryPlace puede utilizarla con fines promocionales internos y externos. Tenga en cuenta que otros participantes pueden utilizar su información publicada fuera del control de StoryPlace. Si no desea que se utilice, publique, copie y/o reimprima la información que ha puesto a disposición a través de este sitio, no la publique aquí.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Para preservar la cultura y la integridad de StoryPlace, nos reservamos el derecho de suspender o cancelar su acceso si las publicaciones no cumplen con estas expectativas de comportamiento profesional. Tómese un momento para familiarizarse con estas importantes reglas. Es posible que cambiemos estas reglas de vez en cuando.</strong>
                        <strong></strong>
                        <strong>Tenga en cuenta que usted es personalmente responsable de proteger cualquier confidencialidad que desee o exija legalmente para usted.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>El uso de StoryPlace de cualquier manera significa que usted acepta todos estos Términos, y estos Términos (en la medida en que se actualicen) permanecerán en vigor mientras utilice StoryPlace. Si no está de acuerdo con todo lo siguiente, no podrá usar StoryPlace ni acceder a él de ninguna manera.&nbsp;Usted declara y garantiza que es mayor de edad para celebrar un contrato vinculante (o, de no ser así, que ha recibido el permiso de sus padres o tutores para usar StoryPlace y que su padre o tutor acepta estos Términos en su nombre).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Si acepta estos Términos en nombre de una organización o entidad, declara y garantiza que está autorizado a aceptar estos Términos en nombre de esa organización o entidad y a vincularlos a estos Términos (en cuyo caso, las referencias a «usted» y «su» que aparecen en este documento se refieren a esa organización o entidad).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Propiedad del contenido</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>En primer lugar, usted es dueño de lo que crea. Cualquier contenido original que publique, cargue, comparta, almacene o proporcione a StoryPlace seguirá siendo suyo y está protegido por los derechos de autor y cualquier otra ley de propiedad intelectual aplicable.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Acuerdo de publicación</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Todo lo que se publique en StoryPlace debe cumplir con las siguientes reglas:&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Sus publicaciones no deben infringir los derechos de otra persona. No copie, reproduzca, modifique, traduzca, publique, transmita, distribuya, interprete, cargue, muestre, licencie, venda, comercialice ni explote de ningún otro modo con ningún fin ningún contenido que no sea de su propiedad, a menos que cuente con el consentimiento previo del propietario de ese contenido.&nbsp;</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Licencia Limitada a Nosotros: Para mostrar su contenido y permitir que otros usuarios lo disfruten, nos concede ciertos derechos sobre su contenido.</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Si comparte su contenido en StoryPlace, Usted nos otorga una licencia para traducir, modificar, reproducir y actuar de otro modo con respecto a su contenido a fin de que podamos proporcionarle, mejorar y notificarle sobre las nuevas funciones de StoryPlace. Usted comprende y acepta que es posible que necesitemos realizar cambios en su contenido para ajustarlo y adaptarlo a los requisitos técnicos de las redes, los dispositivos, los servicios o los medios, y esta licencia incluye los derechos para hacerlo.&nbsp;</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Si comparte su contenido en StoryPlace, nos concede la licencia para mostrar, reproducir y distribuir su contenido.&nbsp;</strong>
                        </li>
                        <li>
                            <strong>Usted acepta que las licencias que concede están exentas de regalías, son perpetuas, irrevocables y de alcance mundial.&nbsp;Se trata únicamente de una licencia; su propiedad del contenido no se ve afectada.</strong>
                        </li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Nos reservamos el derecho de eliminar cualquier contenido de StoryPlace en cualquier momento y por cualquier motivo (incluido, entre otros, si alguien alega que usted ha contribuido con ese contenido en violación de estos Términos), a nuestra entera discreción y sin previo aviso. Respetamos los derechos de propiedad intelectual de los demás y nos reservamos el derecho de eliminar o deshabilitar el contenido presuntamente infractor y de cerrar las cuentas de los presuntos infractores reincidentes. Usted se compromete a cumplir con los avisos de derechos de autor, las normas de marcas comerciales, la información y otras restricciones que pueda recibir de StoryPlace. Usted entiende que estos Términos no le otorgan ningún derecho, título o interés sobre StoryPlace ni sobre nuestras marcas comerciales, logotipos y demás propiedad intelectual.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>En caso de que tenga una controversia con uno o más usuarios de StoryPlace o con un tercero, usted nos exime, indemniza y se compromete a defendernos a nosotros, a nuestros directivos, empleados, agentes y sucesores de las reclamaciones, demandas y daños de cualquier tipo o naturaleza, conocidos o desconocidos, sospechados o insospechados, revelados o no revelados, que surjan o estén relacionados de alguna manera con dichas disputas o con StoryPlace.&nbsp;</strong>
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
                        <strong>Al enviar contenido a StoryPlace, usted se compromete, en la medida en que lo permita la ley aplicable, a indemnizar y eximir a StoryPlace, sus filiales, directivos, agentes, empleados y socios de cualquier reclamación, responsabilidad, daño (real y consecuente), pérdida y gasto (incluidos los honorarios de los abogados) que surjan o estén relacionados de alguna manera con cualquier reclamación de terceros relacionada con (a) su uso de StoryPlace (incluidas las medidas adoptadas por un tercero que utilice su cuenta) y (b) su incumplimiento de estos Términos.&nbsp; En caso de que se produzca una reclamación, demanda o acción de este tipo, trataremos de notificarle a la información de contacto que tenemos para su cuenta (siempre que el hecho de no entregar dicha notificación no excluya ni reduzca sus obligaciones de indemnización en virtud del presente documento).</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al enviar contenido a StoryPlace, usted acepta que no podrá ceder, delegar ni transferir estos Términos ni sus derechos u obligaciones en virtud del presente documento, ni su cuenta de StoryPlace, de ninguna manera (en virtud de la ley o de otro modo) sin nuestro consentimiento previo por escrito.&nbsp; Podemos transferir, asignar o delegar estos Términos y nuestros derechos y obligaciones sin consentimiento.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Estos Términos se rigen por la legislación federal aplicable y las leyes del Estado de California, sin tener en cuenta los conflictos de disposiciones legales. Cualquier controversia que surja o esté relacionada con el objeto de estos Términos se resolverá finalmente mediante arbitraje en el condado de Los Ángeles (California), de conformidad con las Reglas y Procedimientos de arbitraje simplificados de Judicial Arbitration and Mediation Services, Inc. («JAMS») en vigor en ese momento, por un árbitro comercial con una experiencia sustancial en la resolución de disputas de propiedad intelectual y contratos comerciales, que será seleccionado de la lista correspondiente de árbitros de JAMS de conformidad con las Reglas y Procedimientos de arbitraje simplificados de JAMS. La sentencia sobre el laudo así dictado podrá ser presentada ante un tribunal competente, o podrá solicitarse a dicho tribunal la aceptación judicial de cualquier laudo y una orden de ejecución, según sea el caso. Sin perjuicio de lo anterior, usted acepta renunciar a su derecho a solicitar o iniciar una acción ante un tribunal competente para obtener medidas cautelares u otro tipo de compensación equitativa y acepta limitar todos los recursos que pueda interponer a la indemnización por daños y perjuicios.&nbsp;A todos los efectos de estos Términos, usted acepta someterse a la jurisdicción y competencia exclusivas de los tribunales estatales o federales ubicados, respectivamente, en el condado de Los Ángeles, California. La parte que prevalezca en cualquier acción o proceso judicial que surja de estos Términos tendrá derecho a una compensación en concepto de costas y honorarios de abogados externos. En la medida en que lo permita la ley, usted y StoryPlace aceptan que todas las demandas contra la otra parte solo pueden presentarse a título individual y no como demandantes o miembros de grupo en ningún supuesto proceso judicial colectivo, consolidado u otro proceso judicial representativo. Usted acepta que los árbitros no pueden llevar a cabo ningún proceso judicial colectivo, consolidado o representativo, y se limitan a proporcionar las medidas que justifique la demanda de una parte individual. Usted acepta que estos Términos no contemplan la existencia de terceros beneficiarios. Por la presente, usted reconoce y acepta que no es empleado, agente, socio o empresa conjunta de StoryPlace y que no tiene ninguna autoridad de ningún tipo que nos obligue en ningún aspecto.&nbsp;El hecho de que usted o nosotros no ejerzamos, de cualquier manera, cualquier derecho aquí establecido no se considerará una renuncia a ningún otro derecho en virtud del presente documento.&nbsp;&nbsp;Si se determina que alguna disposición de estos Términos es inaplicable o inválida, dicha disposición se limitará o eliminará, en la medida mínima necesaria, de modo que estos Términos permanezcan en pleno vigor y efecto y sean aplicables.&nbsp;&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Usted acepta que estos Términos son la declaración completa y exclusiva del entendimiento mutuo entre usted y nosotros, y que sustituyen y cancelan todos los acuerdos, comunicaciones y otros entendimientos anteriores escritos y orales relacionados con el objeto de estos Términos.&nbsp;&nbsp;Además, usted acepta que no publicará información privada de otras personas (como un número de teléfono personal o una dirección particular) sin su autorización y permiso expresos. También prohibimos amenazar con exponer información privada o incentivar a otros a hacerlo. La publicación de información de acceso público no constituye una violación de esta política.&nbsp; No permitimos ningún contenido de explotación sexual en StoryPlace, incluida ninguna descripción de actos sexuales con el único propósito de gratificación sexual.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Este Acuerdo de publicación («Acuerdo») es un contrato vinculante entre usted y StoryPlace («nosotros», «nos», «nuestro»).&nbsp;Contiene las reglas y restricciones que rigen el uso de StoryPlace para distribuir su contenido allí.&nbsp;</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>El uso de StoryPlace de cualquier manera significa que usted acepta este Acuerdo y este Acuerdo permanecerá en vigor. Si hay una controversia entre usted y un tercero sobre cualquier tema, usted acepta que no tenemos ninguna obligación de involucrarnos y que no seremos responsables de dicha controversia y que no le proporcionaremos ningún asesoramiento legal sobre dichos asuntos. Puede señalar cualquier violación de nuestros Términos de Uso enviando un correo electrónico a support@storyplace.com</strong>
                    </p>
                    <p>
                        <strong>Servicios StoryPlace</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace es un servicio empresarial y, para seguir ofreciendo el servicio y funcionando como empresa, usted entiende que a veces permitimos la publicidad en los Servicios, incluso en relación con la visualización de su contenido u otra información. También podemos utilizar su Contenido para promocionar los Servicios, pero nunca venderemos su contenido a terceros sin su permiso explícito.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Al utilizar la plataforma StoryPlace y sus servicios relacionados (los «Servicios»), puede celebrar términos y condiciones adicionales y otros acuerdos que modifiquen o anulen estos Términos del Servicio, por ejemplo, cuando decida participar en un concurso, una solicitud especial o participar en una recopilación patrocinada. En caso de conflicto o incoherencia, se le indicarán los términos y condiciones de esos términos y acuerdos adicionales y prevalecerán sobre estos Términos del Servicio.</strong>
                    </p>
                    <h3>Problemas de derechos de autor</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace ha adoptado una política respecto a la infracción de los derechos de autor en los Servicios de conformidad con la
                        </strong>
                        <a target="_blank" href="https://www.copyright.gov/legislation/dmca.pdf" rel="noreferrer">
                            <strong>United States Digital Millennium Copyright Act</strong>
                        </a>
                        <strong>
                            (Ley de derechos de autor para medios digitales en el nuevo milenio, la «DMCA», por sus siglas en inglés). Si bien nuestra política se basa en la legislación estadounidense, aplicamos esta misma política a nivel mundial a todas las jurisdicciones en las que nuestros Servicios están disponibles. Si quiere presentar una reclamación por infracción de derechos de autor, visite nuestra página sobre cómo
                        </strong>
                        <span style={{ textDecoration: "underline" }}>
                            <strong>Denunciar una infracción de derechos de autor</strong>
                        </span>
                        <strong>. StoryPlace se reserva el derecho de eliminar el contenido presuntamente infractor sin previo aviso, a nuestra entera discreción y sin responsabilidad ante usted ni ante ninguna otra persona.&nbsp;</strong>
                    </p>
                    <h3>Pautas de Contenido</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>En StoryPlace, ofrecemos una amplia gama de historias y no censuramos ni modificamos arbitrariamente el contenido publicado, con el objetivo de crear un espacio seguro, inclusivo y cómodo para todos. Dicho esto, si una historia o un usuario infringen nuestro código de conducta, su historia se eliminará y la cuenta del usuario se bloqueará en la aplicación/plataforma/Servicios. En StoryPlace, acogemos el anonimato, promovemos la amabilidad e imponemos la empatía. Le pedimos que distinga el escuchar con estar de acuerdo y nos ayude a crear un espacio inclusivo y respetuoso para todos y sus historias. Queremos asegurarnos de que los usuarios de StoryPlace sepan qué tipo de contenido pueden descubrir, así como el contenido que pueden o no pueden publicar.</strong>
                    </p>
                    <h3>Código de Conducta de StoryPlace</h3>
                    <p>
                        <strong>Al utilizar los Servicios de StoryPlace, usted acepta el siguiente código de conducta.&nbsp;</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Publique sus pensamientos y sentimientos, no haga spam. No utilice StoryPlace para expresar discursos de odio, amenazas, comentarios ofensivos, opiniones políticas divisivas, spam, publicidad o contenido irrelevante.</strong>
                        </li>
                        <li>
                            <strong>Separe la lectura de la aceptación. No todas las personas tienen las mismas opiniones y eso está bien. Respete la historia tal como se cuenta. Si no tiene nada bueno que decir, no lo diga.</strong>
                        </li>
                        <li>
                            <strong>¡La amabilidad es la clave! Trate todas las historias de la forma en que le gustaría que trataran las suyas. Tenga en cuenta que compartir una historia es un acto de valentía.</strong>
                        </li>
                        <li>
                            <strong>La empatía no siempre es bonita. Tenga en cuenta que las lecciones más importantes de la vida a menudo provienen de historias que son difíciles de leer. Aprecie las diferentes perspectivas.</strong>
                        </li>
                    </ul>
                    <p>
                        <strong>¡Manténgase informado! Familiarícese con nuestro Código de Conducta, Pautas de Contenido, Términos del Servicio y Política de Privacidad.</strong>
                    </p>
                    <p>
                        <strong>¡TRES ERRORES Y FUERA!</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace tiene una estricta regla de 3 ERRORES Y FUERA. Si su perfil es denunciado legítimamente por violar 3 veces el código de StoryPlace, se le prohibirá el uso de nuestros Servicios de forma indefinida. Recibirá una notificación si se denuncia su cuenta (pero no la identidad de las partes denunciantes) y se revisan todos los informes. Si encuentra algún contenido que infrinja nuestras pautas, infórmenos denunciándolo.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>SPAM: Cualquier contenido que anuncie productos o servicios que no estén relacionados con StoryPlace o que no estén autorizados por StoryPlace no está permitido y se eliminará.</strong>
                    </p>
                    <h3>Clasificaciones de historias en StoryPlace</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>Algunas historias tienen contenido que puede considerarse «para adultos» o «delicado» para el público en general. Se espera que todos los usuarios de StoryPlace clasifiquen sus historias en consecuencia si se aplica el siguiente criterio a su historia. Si encuentra una historia que ha sido clasificada de forma incorrecta, puede hacérnoslo saber denunciándola. Tenga en cuenta que cambiaremos su clasificación si no cumple con estas pautas. Si no está seguro de la categoría de clasificación de su historia, envíenos un correo electrónico a support@storyplace.com y le guiaremos en este proceso.</strong>
                    </p>
                    <p>
                        <strong>Clasificación para adultos</strong>
                    </p>
                    <p>
                        <strong>Las historias para adultos están destinadas a un público mayor de 18 años. Una historia puede clasificarse como para adultos si contiene alguno de los siguientes elementos:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Contenido sexual (que incluya relaciones sexuales y otros actos sexuales, incluidos, pero no limitados a, el sexo oral o la autogratificación, tanto consentida como no consentida)</strong>
                        </li>
                        <li>
                            <strong>Uso excesivo de lenguaje obsceno</strong>
                        </li>
                        <li>
                            <strong>Drogas o sustancias que en general son ilegales o solo legales para personas mayores de 18 años</strong>
                        </li>
                    </ul>
                    <h3>Clasificación sensible</h3>
                    <p>
                        <strong>Las historias sensibles están destinadas a una audiencia que puede manejar contenido sensible desde el punto de vista emocional. Una historia puede clasificarse como sensible si contiene alguno de los siguientes elementos:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Temas o escenas de autolesiones (incluidos el suicidio y los trastornos de la alimentación)</strong>
                        </li>
                        <li>
                            <strong>Representaciones gráficas de violencia; que incluyen, pero no se limitan a: abuso sexual, verbal, emocional y físico.</strong>
                        </li>
                    </ul>
                    <h3 style={{ textAlign: 'center' }}>PREGUNTAS FRECUENTES</h3>
                    <h3>¿Cómo protege StoryPlace mi historia contra el robo?</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>StoryPlace anima a todos los narradores a expresarse libremente y a expresar su creatividad a través de historias originales y reales. No permitimos ninguna infracción de derechos de autor ni material pirateado en la plataforma y eliminaremos cualquier obra que descubramos que se ha publicado de forma ilegal. Si bien es posible que algunos usuarios no conozcan la ley de derechos de autor, hacemos todo lo posible para educar e informar a nuestra comunidad. Lea a continuación para obtener más información sobre la ley de Derechos de autor:</strong>
                    </p>
                    <p>
                        <strong>Las plataformas StoryPlace están diseñadas con la intención de proteger a los Narradores y sus historias en la medida de lo posible. Hemos adoptado varias medidas para ayudar a los usuarios de StoryPlace a sentirse seguros y limitar las infracciones de derechos de autor en nuestras plataformas:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Las interacciones entre los usuarios de StoryPlace se gestionan con total transparencia para ambas partes. En el momento en que un usuario realiza alguna acción en una historia (la abre, la lee, descarga material, envía un mensaje, etc.), esa acción queda registrada y un registro de actividad queda archivado y visible para ambas partes en todo momento.</strong>
                        </li>
                        <li>
                            <strong>Por ley, su obra queda protegida automáticamente en virtud de la Ley de Derechos de autor tan pronto como la pone en un formato fijo, por ejemplo, por escrito. Hay varias herramientas adicionales de licencias de derechos de autor que puede usar para enviar o registrar su obra antes de publicarla en StoryPlace, y puede encontrarlas en nuestro artículo sobre Derechos de autor. Tenga en cuenta que para obtener la máxima protección o demandar a alguien si alguien infringe su obra de forma ilegal, debe registrarla en la oficina de derechos de autor de su país.</strong>
                        </li>
                        <li>
                            <strong>Nos regimos por el proceso DMCA, por lo que, si cree que su trabajo ha sido copiado indebidamente, puede enviar una Solicitud de retirada DMCA y le responderemos lo antes posible.</strong>
                        </li>
                        <li>
                            <strong>Las funciones de copiar/pegar también están deshabilitadas en StoryPlace, lo que impide que los usuarios copien fácilmente su trabajo.</strong>
                        </li>
                    </ul>
                    <h3>¿Qué se considera infracción de derechos de autor?</h3>
                    <ul>
                        <li>
                            <strong>Publicar obras protegidas por derechos de autor de otras personas sin su consentimiento legal</strong>
                        </li>
                        <li>
                            <strong>Publicar en nombre de otra persona y darle crédito. Esto sigue siendo una violación de los derechos de autor y se tratará de la misma manera. SIEMPRE se requiere el consentimiento de la persona propietaria del material o la historia.</strong>
                        </li>
                        <li>
                            <strong>Adaptaciones o alteraciones leves de una obra, como cambiar de nombre, copiar los eventos y escribirlos con sus propias palabras, o simplemente cambiar un punto de vista.</strong>
                        </li>
                        <li>
                            <strong>Usar una imagen u otro archivo de vídeo o audio que no sea de su propiedad. Esto incluye hacer una portada con una imagen de la que no tenga los derechos (a menos que sea de dominio público).</strong>
                        </li>
                    </ul>
                    <p>
                        <strong>¿Qué protege y qué no protege la ley de derechos de autor?</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>La ley de derechos de autor solo protege la representación física de una idea, no la idea en sí misma. Desafortunadamente, tramas, temas de historias y títulos similares no son suficientes para constituir una infracción de derechos de autor. Por eso hay muchas historias y películas que se parecen mucho entre sí.</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>A menos que existan pruebas sustanciales de infracción de derechos de autor que puedan ser confirmadas en un tribunal de justicia (según la jurisprudencia reciente), los administradores del sitio web no podrán eliminar la historia. Si este es el caso, le sugerimos que intente ponerse en contacto con el otro escritor y tratar respetuosamente de resolver el problema en privado. Si no está seguro de que una obra infringe sus derechos de autor, le recomendamos que busque asesoramiento profesional o legal antes de enviar una notificación.</strong>
                    </p>
                    <h3>¿Cómo aborda StoryPlace las infracciones de derechos de autor?</h3>
                    <p>
                        <strong>StoryPlace se toma muy en serio las infracciones de derechos de autor. Los usuarios no pueden publicar historias que no sean material original o que no sean de su propiedad, a menos que cuenten con el permiso legal del propietario y puedan proporcionar pruebas cuando se les solicite. Todas las obras publicadas que se nos denuncien o que descubramos se eliminarán inmediatamente. Si la obra no está publicada, solicitamos al propietario que presente un informe de infracción de derechos de autor y eliminaremos las obras infractoras lo antes posible.</strong>
                    </p>
                    <p>
                        <strong>¿Cómo denuncio las infracciones de derechos de autor en StoryPlace?</strong>
                    </p>
                    <p>
                        <strong>Envíe un informe de Infracción de Derechos de autor en
                        </strong>
                        <a target="_blank" href="https://old.storyplace.com/en/copyright-claim" rel="noreferrer">
                            <strong>www.storyplace.com/copyright-claim</strong>
                        </a>
                        <strong>
                            o envíenos un correo electrónico a support@storyplace.com</strong>
                    </p>
                    <p>
                        <strong>Derechos de autor en su país</strong>
                    </p>
                    <p>
                        <strong>Si quiere registrar su historia en la oficina de derechos de autor de su país, hay muchos recursos en línea que le pueden ayudar. Puede buscar la oficina de derechos de autor de su país en el Directorio de oficinas de propiedad intelectual de la OMPI en
                        </strong>
                        <a target="_blank" href="http://www.wipo.int/directory/en/urls.jsp" rel="noreferrer">
                            <strong>http://www.wipo.int/directory/en/urls.jsp</strong>
                        </a>
                        <strong>.</strong>
                    </p>
                    <p>
                        <strong>Si tiene alguna pregunta o comentario adicional, envíenos un correo electrónico a support@storyplace.com</strong>
                    </p>
                </LegalContainer>
            </>
        );
    }


    return (
        <>
            <LegalContainer>

                <h2 style={{ textAlign: 'center' }}>Content Guidelines</h2>
                <h3>Before you Begin.</h3>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Before posting any content to any of the StoryPlace platforms (herein referred to as “StoryPlace”), we ask that you read our Content Guidelines. If your content does not comply with these guidelines it may be removed at any time.</strong>
                    <strong></strong>
                    <strong>You own all the rights to the content you create and post on all StoryPlace platforms. However don’t submit content you don’t hold the copyright for, unless you have permission, including to grant StoryPlace all the rights outlined in these terms.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>When you post content to StoryPlace, we need the legal permission under applicable copyright laws to display that content to users of the StoryPlace platforms. Legally this means you give us a nonexclusive license to publish your content on the StoryPlace Services, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it), as well as use it for marketing related content (social media, campaigns, PR and newsletters)</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>You’re responsible for the content you post. This means you assume all risks related to its publication and display, including someone else’s reliance on its accuracy and any claims relating to intellectual property or other legal rights.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Please read our guide on Copyrights for further information.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>The opinions and views expressed on these pages do not in any way reflect the views of the site they are posted on, other sites affiliated with the site, the staff involved with maintaining the site or any members of the site.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace reserves the sole right to review, edit and/or delete any content it deems inappropriate, in its sole and absolute discretion. Comments including but not limited to the following may be deleted or edited by the moderators:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Abusive or hurtful comments about others;</strong>
                    </li>
                    <li>
                        <strong>Comments that use foul language or "hate speech" (for example, including but not limited to racial, ethnic or gender bashing language);</strong>
                    </li>
                    <li>
                        <strong>Personal attacks or defamatory statements;</strong>
                    </li>
                    <li>
                        <strong>Comments that violate the privacy of any individual;</strong>
                    </li>
                    <li>
                        <strong>Promotion of self-harm or suicide.&nbsp;</strong>
                    </li>
                </ul>
                <p style={{ textAlign: 'justify' }}>
                    <strong>We want to prevent people from celebrating or promoting self-harm. We also must consider the safety of the people who such posts which may trigger thoughts of self-harm or suicide in others. We don’t want people to share content that promotes self-harm, but we also don’t want to shame or trigger the person who posted the content by removing their post. As a result, we reserve the right to restrict content to persons over the age of 13 and legally able to enter into binding legal agreements as persons of the age of consent and content construction, include a sensitivity screen, and provide resources so that people are aware the content may be upsetting.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>If you are entertaining suicidal thoughts, please contact the 988 Suicide and Crisis Lifeline and the Crisis Text Line (listed below) or local crisis phone numbers.</strong>
                </p>
                <h4>988 Suicide and Crisis Lifeline&nbsp;Dial 988</h4>
                <p style={{ textAlign: 'justify' }}>
                    <strong>The 988 Suicide and Crisis Lifeline is a hotline for individuals in crisis or for those looking to help someone else. To speak with a trained listener, call 988. Visit&nbsp;</strong>
                    <a target="_blank" href="https://988lifeline.org" rel="noreferrer">
                        <strong>988lifeline.org</strong>
                    </a>
                    <strong>&nbsp;for crisis chat services or for more information.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By submitting content to StoryPlace, you understand and acknowledge that this information is available to the public, and that StoryPlace may use this information for internal and external promotional purposes. Please note that other participants may use your posted information beyond the control of StoryPlace. If you do not wish to have the information you have made available via this site used, published, copied and/or reprinted, please do not post it here.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>To preserve the culture and integrity of StoryPlace, we reserve the right to suspend or terminate your access if postings do not adhere to these expectations for professional behavior. Please take a moment to acquaint yourself with these important rules. We may change these rules from time to time.</strong>
                    <strong></strong>
                    <strong>Please recognize that you are personally responsible for protecting any desired or legally required confidentiality for yourself.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Using StoryPlace in any way means that you agree to all of these Terms, and these Terms (as may be updated) will remain in effect while you use StoryPlace. If you don’t agree to all of the following, you may not use or access StoryPlace in any manner.&nbsp;You represent and warrant that you are of legal age to form a binding contract (or if not, that you’ve received your parent’s or guardian’s permission to use StoryPlace and that your parent or guardian agrees to these Terms on your behalf).&nbsp;</strong>
                    <strong>If you’re agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” throughout this document refer to that organization or entity).</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Content Ownership</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>First and foremost, you own what you create. Any original content you post, upload, share, store, or otherwise provide to StoryPlace remains yours and is protected by copyright and any other applicable intellectual property laws.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Publisher Agreement</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Anything posted on StoryPlace must abide of the following rules:&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Your Posts should not violate someone else’s rights. Don’t copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose any content not owned by you unless you have prior consent from the owner of that content.&nbsp;</strong>
                </p>
                <ul>
                    <li>
                        <strong>Limited License to Us: In order to display your content, and to allow other users to enjoy it, you grant us certain rights in your content.</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>If you share your content on StoryPlace, You hereby grant us a license to translate, modify, reproduce, and otherwise act with respect to your content to enable us to provide, improve, and notify you about new features within StoryPlace. You understand and agree that we may need to make changes to your content to conform and adapt it to the technical requirements of networks, devices, services, or media, and this license includes the rights to do so.&nbsp;</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>If you share your content on StoryPlace,&nbsp; you grant us the license to display, perform, and distribute your content.&nbsp;</strong>
                    </li>
                    <li>
                        <strong>You agree that the licenses you grant are royalty-free, perpetual, irrevocable, and worldwide.&nbsp;This is a license only – your ownership in the content is not affected.</strong>
                    </li>
                </ul>
                <p style={{ textAlign: 'justify' }}>
                    <strong>We reserve the right to remove any content from StoryPlace at any time, for any reason (including, but not limited to, if someone alleges you contributed that content in violation of these Terms), in our sole discretion, and without notice. We respect others’ intellectual property rights, and we reserve the right to delete or disable content alleged to be infringing, and to terminate the accounts of repeat alleged infringers. You promise to abide by copyright notices, trademark rules, information, and other restrictions you may receive from StoryPlace. You understand that these Terms don’t grant you any right, title or interest in StoryPlace or our trademarks, logos, and other intellectual property.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>In the event that you have a dispute with one or more other users of StoryPlace or with a third party, you release, indemnify and shall defend us, our officers, employees, agents, and successors from claims, demands, and damages of every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes and/or StoryPlace.&nbsp;</strong>
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
                    <strong>By submitting content to StoryPlace, you agree to the fullest extent allowed by applicable law, to indemnify and hold StoryPlace, its affiliates, officers, agents, employees, and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to any third party claims relating to (a) your use of StoryPlace (including any actions taken by a third party using your account), and (b) your violation of these Terms.&nbsp; In the event of such a claim, suit, or action, we will attempt to provide notice to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>By submitting content to StoryPlace, you agree that you may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your StoryPlace account, in any way (by operation of law or otherwise) without our prior written consent.&nbsp; We may transfer, assign, or delegate these Terms and our rights and obligations without consent.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>These Terms are governed by and will be construed under applicable federal law and the laws of the State of California, without regard to the conflicts of laws provisions thereof. Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in Los Angeles County, California, in accordance with the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with the Streamlined Arbitration Rules and Procedures of JAMS. Judgment upon the award so rendered may be entered in a court having jurisdiction, or application may be made to such court for judicial acceptance of any award and an order of enforcement, as the case may be. Notwithstanding the foregoing, you agree to waive your rights to seek or actually institute an action in a court of proper jurisdiction for injunctive or other equitable relief and agree to limit all recourse you may seek to monetary damages at law.&nbsp; For all purposes of these Terms, you consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, Los Angeles County, California. The prevailing party in any action or proceeding arising out of these Terms will be entitled to an award of costs and outside attorneys’ fees. To the fullest extent permitted by law, you and StoryPlace agree that all claims against the other can only be brought in an individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or other representative proceeding. You agree that arbitrators may not conduct any class, consolidated, or representative proceeding, and are limited to providing relief warranted by an individual party's claim. You agree there are no third-party beneficiaries intended under these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of StoryPlace and you do not have any authority of any kind to bind us in any respect whatsoever.&nbsp;The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder.&nbsp;&nbsp;If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable.&nbsp;&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>You agree that these Terms are the complete and exclusive statement of the mutual understanding between you and us, and that it supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the subject matter of these Terms.&nbsp;&nbsp;Furthermore, you agree that you shall not publish or post other people's private information (such as a personal phone number or home address) without their express authorization and permission. We also prohibit threatening to expose private information or incentivizing others to do so. The publication of publicly accessible information is not a violation of this policy.&nbsp; We don’t allow any sexually exploitative content on StoryPlace including any descriptions of sexual acts for the sole purpose of sexual gratification.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>This Publisher Agreement (“Agreement”) is a binding contract between you and StoryPlace (“we”, “us”, “our”).&nbsp;It contains the rules and restrictions that govern your use of StoryPlace to distribute your content therein.&nbsp;</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Using StoryPlace in any way means that you agree to this Agreement, and this Agreement will remain in effect. If there is a dispute between you and any third party on any issue, you agree we are under no obligation to become involved and that we will not be held liable for any such dispute and we won’t provide you with any legal advice regarding such matters. You can flag any violations of our Terms of Use by sending an email to support@storyplace.com</strong>
                </p>
                <p>
                    <strong>StoryPlace Services</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace is a business service and to continue to offer the service and function as a business you understand that we sometimes enable advertising on the Services, including in connection with the display of your content or other information. We may also use your Content to promote the Services but we will never sell your content to third parties without your explicit permission.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>In your use of the StoryPlace platform and its related services (the “Services”), you may enter into additional terms and conditions and other agreements that alter or override these Terms of Service, such as when you choose to enter into a competition, special request, or submit to a sponsored collection. In case of any conflict or inconsistency, the terms and conditions of those additional terms and agreements would be stated to you and would override these Terms of Service.</strong>
                </p>
                <h3>Copyright Issues</h3>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace has adopted a policy toward copyright infringement on the Services in accordance with the
                    </strong>
                    <a target="_blank" href="https://www.copyright.gov/legislation/dmca.pdf" rel="noreferrer">
                        <strong>United States Digital Millennium Copyright Act</strong>
                    </a>
                    <strong>
                        (the “DMCA”). While our policy is based on the US law we apply this same policy globally to all jurisdictions in which our Services are available. If you’d like to submit a claim of copyright infringement, please visit our page on
                    </strong>
                    <span style={{ textDecoration: "underline" }}>
                        <strong>Reporting Copyright Infringement</strong>
                    </span>
                    <strong>. StoryPlace reserves the right to remove content alleged to be infringing without prior notice, at our sole discretion, and without liability to you or anyone else.&nbsp;</strong>
                </p>
                <h3>Content Guidelines</h3>
                <p style={{ textAlign: 'justify' }}>
                    <strong>At StoryPlace, we offer a diverse range of stories and do not arbitrarily censor or modify the content posted, with the goal of creating a safe, inclusive and comfortable space for everyone. That being said, if a story or user violates our code of conduct, their story will be removed and the user’s account will be blocked from the app/platform/Services. At StoryPlace, we embrace anonymity, promote kindness and enforce empathy. We ask that you separate listening from agreeing and help us create an inclusive and respectful space for everyone and their stories. We want to ensure that StoryPlace users know what type of content they can discover as well as content they can or cannot post.</strong>
                </p>
                <h3>StoryPlace Code of Conduct</h3>
                <p>
                    <strong>By using the StoryPlace Services you agree to the following code of conduct.&nbsp;</strong>
                </p>
                <ul>
                    <li>
                        <strong>Post your thoughts and feelings, not spam. Please do not use StoryPlace to express any hate speech, threats, offensive comments, divisive political views, spam, advertising or irrelevant content.</strong>
                    </li>
                    <li>
                        <strong>Separate reading from agreeing. Not all people have the same opinions and that’s OK. Respect the story as told. If you don’t have anything good to say, don’t say it.</strong>
                    </li>
                    <li>
                        <strong>Kindness is key! Treat all stories the way you would want yours to be treated. Keep in mind that sharing a story is an act of bravery.</strong>
                    </li>
                    <li>
                        <strong>Empathy is not always pretty. Keep in mind that life’s biggest lessons often come from stories that are difficult to read. Appreciate different perspectives.</strong>
                    </li>
                </ul>
                <p>
                    <strong>Stay informed! Familiarize yourself with our Code of Conduct, Content Guidelines, Terms of Service and Privacy Policy.</strong>
                </p>
                <p>
                    <strong>THREE STRIKES YOU’RE OUT!</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace has a strict 3 STRIKES AND YOU ARE OUT Rule. If your profile is rightfully reported for breaking StoryPlace code 3 times, you will be banned indefinitely from using our Services.&nbsp; You will be notified if your account is reported (but not the identity of the reporting parties) and all reports are reviewed. If you come across any content that violates our guidelines, let us know by reporting it.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>SPAM: Any content that advertises products or services unrelated to, or not sanctioned by StoryPlace is not permitted and will be removed.</strong>
                </p>
                <h3>Story Ratings on StoryPlace</h3>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Some stories have content that can be considered “Mature” or “Sensitive” for a general audience. All StoryPlace users are expected to rate their stories accordingly if the following criterion applies to their story. If you come across a story that has been rated incorrectly, you can let us know by reporting it. Please note that we will change your rating if it does not comply with these guidelines. If you are unsure about your story’s rating category, please email us at support@storyplace.com and we will guide you through this process.</strong>
                </p>
                <p>
                    <strong>Mature Rating</strong>
                </p>
                <p>
                    <strong>Mature stories are intended for an audience that is 18+ years of age. A story may be rated Mature if it contains any of the following:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Sexual content (involving sexual intercourse and other sexual acts, including, but not limited to, oral sex or self-gratification, both consensual and non-consensual)</strong>
                    </li>
                    <li>
                        <strong>Excessive use of curse words</strong>
                    </li>
                    <li>
                        <strong>Drugs or substances that are overall illegal or only legal for 18+ people</strong>
                    </li>
                </ul>
                <h3>Sensitive Rating</h3>
                <p>
                    <strong>Sensitive stories are intended for an audience that can emotionally handle delicate content. A story may be rated Sensitive if it contains any of the following:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Self-harm themes or scenes (including suicide and eating disorders)</strong>
                    </li>
                    <li>
                        <strong>Graphic depictions of violence; including but not limited to: sexual, verbal, emotional and physical abuse.</strong>
                    </li>
                </ul>
                <h3 style={{ textAlign: 'center' }}>GENERALLY ASKED QUESTIONS</h3>
                <h3>How does StoryPlace protect my story from being stolen?</h3>
                <p style={{ textAlign: 'justify' }}>
                    <strong>StoryPlace encourages all storytellers to express themselves and their creativity freely through original and true stories. We do not allow any copyright infringement or pirated material on the platform and will remove any works that we discover to have been published illegally. While some users may not be aware of copyright law, we do our best to educate and inform our community. Please read below for more information about Copyright law:</strong>
                </p>
                <p>
                    <strong>The StoryPlace platforms are designed with the intention of protecting Storytellers and their stories as much as possible. We have several measures in place to help StoryPlace users feel safe and limit copyright infringement on our platforms:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Interactions between users on StoryPlace are managed with full transparency to both parties. The moment a user takes any action on a story, (opens it, reads it, downloads material, sends a message, etc.) that action is recorded and an activity record is kept on file and visible to both parties at all times.</strong>
                    </li>
                    <li>
                        <strong>By law, your work is automatically protected under Copyright Law as soon as you put it into a fixed format, such as writing it down. There are several additional copyright license tools that you can use to submit or register your work prior to posting on StoryPlace, and you can find them in our Copyrights article. Keep in mind that to get the most protection or sue if someone unlawfully infringes on your work, you need to register it in your country’s copyright office.</strong>
                    </li>
                    <li>
                        <strong>We abide by the DMCA process, so if you believe your work has been copied improperly, you can submit a DMCA Takedown Request and we will respond as soon as possible.</strong>
                    </li>
                    <li>
                        <strong>The copy/paste functions are also disabled on StoryPlace, which prevents users from easily copying your work.</strong>
                    </li>
                </ul>
                <h3>What is considered copyright infringement?</h3>
                <ul>
                    <li>
                        <strong>Posting the copyrighted works of others without their legal consent</strong>
                    </li>
                    <li>
                        <strong>Posting on behalf of someone else and giving credit to them. This is still a violation of copyright and will be treated the same way. Consent is ALWAYS required from the person who owns the material or story.</strong>
                    </li>
                    <li>
                        <strong>Adaptations or slight alterations to a work, such as changing names, copying the events and writing them in your own words, or simply changing a point of view.</strong>
                    </li>
                    <li>
                        <strong>Using an image, other video or audio file that you do not own. This includes making a cover with an image that you do not own the rights to (unless it is in the public domain).</strong>
                    </li>
                </ul>
                <p>
                    <strong>What does and doesn't copyright law protect?</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Copyright law only protects the physical representation of an idea, not the idea itself. Unfortunately, similar plots, story themes, and titles are not enough to constitute a copyright infringement. This is why there are many stories and movies that are very similar to each other.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <strong>Unless there is substantial evidence of copyright infringement that can hold up in a court of law (based on recent caselaw), website administrators will not be able to remove the story. If this is the case, we suggest you try to contact the other writer and respectfully try to resolve the issue in private. If you are unsure of whether a work infringes your copyright, we encourage you to seek professional/legal advice before submitting a notice.</strong>
                </p>
                <h3>How does StoryPlace deal with copyright infringement?</h3>
                <p>
                    <strong>StoryPlace takes copyright infringement very seriously. Users are not permitted to post stories that are not original material or that they do not own unless they have legal permission from the owner and can provide evidence when requested. Any published works that are reported to us, or that we discover, are removed immediately. If the work is not published, we require the owner to submit a Copyright infringement report and we will remove infringing works as quickly as possible.</strong>
                </p>
                <p>
                    <strong>How do I report copyright infringements on StoryPlace?</strong>
                </p>
                <p>
                    <strong>Please submit a Copyright Infringement report by going to
                    </strong>
                    <a target="_blank" href="https://old.storyplace.com/en/copyright-claim" rel="noreferrer">
                        <strong>www.storyplace.com/copyright-claim</strong>
                    </a>
                    <strong>
                        or email us at support@storyplace.com</strong>
                </p>
                <p>
                    <strong>Copyright in your country</strong>
                </p>
                <p>
                    <strong>If you want to register your story with your country’s copyright office, there are a lot of resources online to help you. You can search for your country’s copyright office through WIPO’s Directory of Intellectual Property Offices at
                    </strong>
                    <a target="_blank" href="http://www.wipo.int/directory/en/urls.jsp" rel="noreferrer">
                        <strong>http://www.wipo.int/directory/en/urls.jsp</strong>
                    </a>
                    <strong>.</strong>
                </p>
                <p>
                    <strong>&nbsp;If you have any additional questions or comments please email us at support@storyplace.com</strong>
                </p>

            </LegalContainer>

        </>

    )
}


export default ContentGuidelines;