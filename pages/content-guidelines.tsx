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
                    <h2>Pautas de contenido</h2>
                    <h3>Antes de empezar.</h3>
                    <p>Antes de publicar cualquier contenido en cualquiera de las plataformas de StoryPlace (en lo sucesivo, &laquo;StoryPlace&raquo;), le pedimos que lea nuestras Pautas de contenido. Si su contenido no cumple con estas pautas, puede eliminarse en cualquier momento.&nbsp;Usted es propietario de todos los derechos del contenido que cree y publique en todas las plataformas de StoryPlace. Sin embargo, no env&iacute;e contenido del que no sea titular de los derechos de autor, a menos que tenga permiso, incluso para conceder a StoryPlace todos los derechos descritos en estos t&eacute;rminos.</p>
                    <p>Cuando publica contenido en StoryPlace, necesitamos el permiso legal en virtud de las leyes de derechos de autor aplicables para mostrar ese contenido a los usuarios de las plataformas de StoryPlace. Legalmente, esto significa que nos otorga una licencia no exclusiva para publicar su contenido en los Servicios de StoryPlace, que incluye todo lo que est&eacute; razonablemente relacionado con su publicaci&oacute;n (como almacenarlo, mostrarlo, reformatearlo y distribuirlo), as&iacute; como para usarlo con contenido relacionado con el marketing (redes sociales, campa&ntilde;as, relaciones p&uacute;blicas y boletines informativos).</p>
                    <p>Usted es responsable del contenido que publica. Esto significa que usted asume todos los riesgos relacionados con su publicaci&oacute;n y visualizaci&oacute;n, incluida la confianza de otra persona en su precisi&oacute;n y cualquier reclamaci&oacute;n relacionada con la propiedad intelectual u otros derechos legales.</p>
                    <p>Lea nuestra gu&iacute;a sobre Derechos de autor para obtener m&aacute;s informaci&oacute;n.</p>
                    <p>Las opiniones y puntos de vista expresados en estas p&aacute;ginas no reflejan en modo alguno las opiniones del sitio en el que se publican, de otros sitios afiliados al sitio, del personal involucrado en el mantenimiento del sitio ni de ning&uacute;n miembro del sitio.</p>
                    <p>StoryPlace se reserva el derecho exclusivo de revisar, editar y/o eliminar cualquier contenido que considere inapropiado, a su entera y absoluta discreci&oacute;n. Los moderadores pueden eliminar o editar los comentarios que incluyan, entre otros, los siguientes:</p>
                    <ul>
                        <li>
                            <p>Comentarios abusivos o hirientes sobre otras personas;</p>
                        </li>
                        <li>
                            <p>Comentarios que utilicen lenguaje grosero o &laquo;incitaci&oacute;n al odio&raquo; (por ejemplo, entre otros, lenguaje ofensivo por motivos raciales, &eacute;tnicos o de g&eacute;nero);</p>
                        </li>
                        <li>
                            <p>Ataques personales o declaraciones difamatorias;</p>
                        </li>
                        <li>
                            <p>Comentarios que violen la privacidad de cualquier persona;</p>
                        </li>
                        <li>
                            <p>Promoci&oacute;n de la autolesi&oacute;n o el suicidio.&nbsp;</p>
                        </li>
                    </ul>
                    <p>Queremos evitar que las personas celebren o promuevan la autolesi&oacute;n. Tambi&eacute;n debemos considerar la seguridad de las personas que puedan ver esas publicaciones, las cuales podr&iacute;an desencadenar pensamientos de autolesi&oacute;n o suicidio en otros. No queremos que las personas compartan contenido que promueva la autolesi&oacute;n, pero tampoco queremos avergonzar o provocar a la persona que public&oacute; dicho contenido al eliminar su publicaci&oacute;n. En consecuencia, nos reservamos el derecho de restringir el contenido a personas mayores de 13 a&ntilde;os y legalmente capaces de celebrar acuerdos legales vinculantes como personas en edad de consentimiento y construcci&oacute;n de contenidos, incluir una pantalla de sensibilidad y proporcionar recursos para que la gente sea consciente de que el contenido puede ser perturbador.</p>
                    <p>Si tiene ideas suicidas, p&oacute;ngase en contacto con el 988 Suicide and Crisis Lifeline y con la Crisis Text Line (que se enumeran a continuaci&oacute;n) o con los n&uacute;meros de tel&eacute;fono locales para situaciones de crisis.</p>
                    <h4>988 Suicide and Crisis Lifeline&nbsp;<br />Marque 988</h4>
                    <p>La l&iacute;nea 988 Suicide and Crisis Lifeline es una l&iacute;nea directa para personas en crisis o para quienes buscan ayudar a otra persona. Para hablar con un oyente capacitado, llame al 988. Visite&nbsp;<a href="https://988lifeline.org">988lifeline.org&nbsp;</a>para ver los servicios de chat en caso de crisis o para obtener m&aacute;s informaci&oacute;n.</p>
                    <p><br /></p>
                    <p>Al enviar contenido a StoryPlace, usted comprende y reconoce que esta informaci&oacute;n est&aacute; disponible para el p&uacute;blico y que StoryPlace puede utilizarla con fines promocionales internos y externos. Tenga en cuenta que otros participantes pueden utilizar su informaci&oacute;n publicada fuera del control de StoryPlace. Si no desea que se utilice, publique, copie y/o reimprima la informaci&oacute;n que ha puesto a disposici&oacute;n a trav&eacute;s de este sitio, no la publique aqu&iacute;.</p>
                    <p>Para preservar la cultura y la integridad de StoryPlace, nos reservamos el derecho de suspender o cancelar su acceso si las publicaciones no cumplen con estas expectativas de comportamiento profesional. T&oacute;mese un momento para familiarizarse con estas importantes reglas. Es posible que cambiemos estas reglas de vez en cuando.&nbsp;Tenga en cuenta que usted es personalmente responsable de proteger cualquier confidencialidad que desee o exija legalmente para usted.</p>
                    <p>El uso de StoryPlace de cualquier manera significa que usted acepta todos estos T&eacute;rminos, y estos T&eacute;rminos (en la medida en que se actualicen) permanecer&aacute;n en vigor mientras utilice StoryPlace. Si no est&aacute; de acuerdo con todo lo siguiente, no podr&aacute; usar StoryPlace ni acceder a &eacute;l de ninguna manera.&nbsp;Usted declara y garantiza que es mayor de edad para celebrar un contrato vinculante (o, de no ser as&iacute;, que ha recibido el permiso de sus padres o tutores para usar StoryPlace y que su padre o tutor acepta estos T&eacute;rminos en su nombre).</p>
                    <p>Si acepta estos T&eacute;rminos en nombre de una organizaci&oacute;n o entidad, declara y garantiza que est&aacute; autorizado a aceptar estos T&eacute;rminos en nombre de esa organizaci&oacute;n o entidad y a vincularlos a estos T&eacute;rminos (en cuyo caso, las referencias a &laquo;usted&raquo; y &laquo;su&raquo; que aparecen en este documento se refieren a esa organizaci&oacute;n o entidad).</p>
                    <p>Propiedad del contenido</p>
                    <p>En primer lugar, usted es due&ntilde;o de lo que crea. Cualquier contenido original que publique, cargue, comparta, almacene o proporcione a StoryPlace seguir&aacute; siendo suyo y est&aacute; protegido por los derechos de autor y cualquier otra ley de propiedad intelectual aplicable.&nbsp;</p>
                    <p>Acuerdo de publicaci&oacute;n</p>
                    <p>Todo lo que se publique en StoryPlace debe cumplir con las siguientes reglas:&nbsp;</p>
                    <p>Sus Publicaciones no deben infringir los derechos de otra persona. No copie, reproduzca, modifique, traduzca, publique, transmita, distribuya, interprete, cargue, muestre, licencie, venda, comercialice ni explote de ning&uacute;n otro modo con ning&uacute;n fin ning&uacute;n contenido que no sea de su propiedad, a menos que cuente con el consentimiento previo del propietario de ese contenido.&nbsp;</p>
                    <ul>
                        <li>
                            <p>Licencia limitada a nosotros: para mostrar Su contenido y permitir que otros usuarios lo disfruten, nos concede ciertos derechos sobre su contenido.</p>
                        </li>
                        <li>
                            <p>Si comparte su contenido en StoryPlace, nos otorga una licencia para traducir, modificar, reproducir y actuar de otro modo con respecto a su contenido a fin de que podamos proporcionarle, mejorar y notificarle sobre las nuevas funciones de StoryPlace. Usted comprende y acepta que es posible que necesitemos realizar cambios en su contenido para ajustarlo y adaptarlo a los requisitos t&eacute;cnicos de las redes, los dispositivos, los servicios o los medios, y esta licencia incluye los derechos para hacerlo.&nbsp;</p>
                        </li>
                        <li>
                            <p>Si comparte su contenido en StoryPlace, nos concede la licencia para mostrar, reproducir y distribuir su contenido.&nbsp;</p>
                        </li>
                        <li>
                            <p>Acepta que las licencias que concede est&aacute;n exentas de regal&iacute;as, son perpetuas, irrevocables y de alcance mundial.&nbsp;Se trata &uacute;nicamente de una licencia; su propiedad del contenido no se ve afectada.</p>
                        </li>
                    </ul>
                    <p>Nos reservamos el derecho de eliminar cualquier contenido de StoryPlace en cualquier momento y por cualquier motivo (incluido, entre otros, si alguien alega que usted ha contribuido con ese contenido en violaci&oacute;n de estos T&eacute;rminos), a nuestra entera discreci&oacute;n y sin previo aviso. Respetamos los derechos de propiedad intelectual de los dem&aacute;s y nos reservamos el derecho de eliminar o deshabilitar el contenido presuntamente infractor y de cerrar las cuentas de los presuntos infractores reincidentes. Usted se compromete a cumplir con los avisos de derechos de autor, las normas de marcas comerciales, la informaci&oacute;n y otras restricciones que pueda recibir de StoryPlace. Usted entiende que estos T&eacute;rminos no le otorgan ning&uacute;n derecho, t&iacute;tulo o inter&eacute;s sobre StoryPlace ni sobre nuestras marcas comerciales, logotipos y dem&aacute;s propiedad intelectual.&nbsp;</p>
                    <p>En caso de que tenga una disputa con uno o m&aacute;s usuarios de StoryPlace o con un tercero, usted nos exime, indemniza y se compromete a defendernos a nosotros, a nuestros directivos, empleados, agentes y sucesores de las reclamaciones, demandas y da&ntilde;os de cualquier tipo o naturaleza, conocidos o desconocidos, sospechados o insospechados, revelados o no revelados, que surjan o est&eacute;n relacionados de alguna manera con dichas disputas o con StoryPlace.&nbsp;</p>
                    <p>Al enviar contenido a StoryPlace, usted acepta que, en la medida en que lo permita la ley aplicable, bajo ninguna circunstancia ni bajo ninguna teor&iacute;a legal StoryPlace, sus licenciantes o sus proveedores ser&aacute;n responsables ante usted o cualquier otra persona por:</p>
                    <ul>
                        <li>
                            <p>Cualquier da&ntilde;o indirecto, especial, incidental o consecuente de cualquier tipo, o</p>
                        </li>
                        <li>
                            <p>Cualquier importe, en conjunto, que supere lo que sea mayor de (1) 100$ o (2) los montos que nos haya pagado o adeudado en relaci&oacute;n con StoryPlace en el per&iacute;odo de doce meses anterior a la reclamaci&oacute;n correspondiente.</p>
                        </li>
                    </ul>
                    <p>StoryPlace se le proporciona &laquo;tal cual&raquo;. Esto significa que se lo proporcionamos sin ninguna garant&iacute;a expresa o impl&iacute;cita de ning&uacute;n tipo. Esto incluye cualquier garant&iacute;a impl&iacute;cita de comerciabilidad, de idoneidad para un fin determinado, de no infracci&oacute;n o cualquier garant&iacute;a de que el uso de StoryPlace ser&aacute; ininterrumpido o estar&aacute; libre de errores. En consecuencia, no declaramos ni garantizamos ning&uacute;n contenido incluido o al que se acceda a trav&eacute;s de StoryPlace, y no seremos responsables de la precisi&oacute;n, el cumplimiento de los derechos de autor, la legalidad o la decencia del material contenido en nuestros productos y servicios.&nbsp;</p>
                    <p>El incumplimiento de cualquiera de estos T&eacute;rminos constituir&aacute; un incumplimiento de estos T&eacute;rminos, lo que puede resultar en la cancelaci&oacute;n inmediata de su cuenta. StoryPlace tiene el derecho exclusivo de decidir si usted est&aacute; infringiendo alguna de las restricciones establecidas en estos T&eacute;rminos.&nbsp;</p>
                    <p>Al enviar contenido a StoryPlace, usted se compromete, en la medida en que lo permita la ley aplicable, a indemnizar y eximir a StoryPlace, sus filiales, directivos, agentes, empleados y socios de cualquier reclamaci&oacute;n, responsabilidad, da&ntilde;o (real y consecuente), p&eacute;rdida y gasto (incluidos los honorarios de los abogados) que surjan o est&eacute;n relacionados de alguna manera con cualquier reclamaci&oacute;n de terceros relacionada con (a) su uso de StoryPlace (incluidas las medidas adoptadas por un tercero que utilice su cuenta) y (b) su incumplimiento de estos T&eacute;rminos. En caso de que se produzca una reclamaci&oacute;n, demanda o acci&oacute;n de este tipo, trataremos de notificarle a la informaci&oacute;n de contacto que tenemos para su cuenta (siempre que el hecho de no entregar dicha notificaci&oacute;n no excluya ni reduzca sus obligaciones de indemnizaci&oacute;n en virtud del presente documento).</p>
                    <p>Al enviar contenido a StoryPlace, usted acepta que no podr&aacute; ceder, delegar ni transferir estos T&eacute;rminos ni sus derechos u obligaciones en virtud del presente documento, ni su cuenta de StoryPlace, de ninguna manera (en virtud de la ley o de otro modo) sin nuestro consentimiento previo por escrito. Podemos transferir, asignar o delegar estos T&eacute;rminos y nuestros derechos y obligaciones sin consentimiento.</p>
                    <p>Estos T&eacute;rminos se rigen por la legislaci&oacute;n federal aplicable y las leyes del Estado de California, sin tener en cuenta los conflictos de disposiciones legales. Cualquier disputa que surja o est&eacute; relacionada con el objeto de estos T&eacute;rminos se resolver&aacute; finalmente mediante arbitraje en el condado de Los &Aacute;ngeles (California), de conformidad con las Reglas y procedimientos de arbitraje simplificados de Judicial Arbitration and Mediation Services, Inc. (&laquo;JAMS&raquo;) en vigor en ese momento, por un &aacute;rbitro comercial con una experiencia sustancial en la resoluci&oacute;n de disputas de propiedad intelectual y contratos comerciales, que ser&aacute; seleccionado de la lista correspondiente de &aacute;rbitros de JAMS de conformidad con las Reglas y procedimientos de arbitraje simplificados de JAMS. La sentencia sobre el laudo as&iacute; dictado podr&aacute; ser presentada ante un tribunal competente, o podr&aacute; solicitarse a dicho tribunal la aceptaci&oacute;n judicial de cualquier laudo y una orden de ejecuci&oacute;n, seg&uacute;n sea el caso. Sin perjuicio de lo anterior, usted acepta renunciar a su derecho a solicitar o iniciar una acci&oacute;n ante un tribunal competente para obtener medidas cautelares u otro tipo de compensaci&oacute;n equitativa y acepta limitar todos los recursos que pueda interponer a la indemnizaci&oacute;n por da&ntilde;os y perjuicios. A todos los efectos de estos T&eacute;rminos, usted acepta someterse a la jurisdicci&oacute;n y competencia exclusivas de los tribunales estatales o federales ubicados, respectivamente, en el condado de Los &Aacute;ngeles, California. La parte que prevalezca en cualquier acci&oacute;n o procedimiento que surja de estos T&eacute;rminos tendr&aacute; derecho a que se le impaguen las costas y los honorarios de abogados externos. En la medida en que lo permita la ley, usted y StoryPlace aceptan que todas las demandas contra la otra parte solo pueden presentarse a t&iacute;tulo individual y no como demandantes o miembros de grupo en ning&uacute;n supuesto procedimiento colectivo, consolidado u otro procedimiento representativo. Usted acepta que los &aacute;rbitros no pueden llevar a cabo ning&uacute;n procedimiento colectivo, consolidado o representativo, y se limitan a proporcionar las medidas que justifique la demanda de una parte individual. Usted acepta que estos T&eacute;rminos no contemplan la existencia de terceros beneficiarios. Por la presente, usted reconoce y acepta que no es empleado, agente, socio o empresa conjunta de StoryPlace y que no tiene ninguna autoridad de ning&uacute;n tipo que nos obligue en ning&uacute;n aspecto. El hecho de que usted o nosotros no ejerzamos, de cualquier manera, cualquier derecho aqu&iacute; establecido no se considerar&aacute; una renuncia a ning&uacute;n otro derecho en virtud del presente documento. Si se determina que alguna disposici&oacute;n de estos T&eacute;rminos es inaplicable o inv&aacute;lida, dicha disposici&oacute;n se limitar&aacute; o eliminar&aacute;, en la medida m&iacute;nima necesaria, de modo que estos T&eacute;rminos permanezcan en pleno vigor y efecto y sean aplicables.&nbsp;</p>
                    <p>Usted acepta que estos T&eacute;rminos son la declaraci&oacute;n completa y exclusiva del entendimiento mutuo entre usted y nosotros, y que sustituyen y cancelan todos los acuerdos, comunicaciones y otros entendimientos anteriores escritos y orales relacionados con el objeto de estos T&eacute;rminos. Adem&aacute;s, usted acepta que no publicar&aacute; informaci&oacute;n privada de otras personas (como un n&uacute;mero de tel&eacute;fono personal o una direcci&oacute;n particular) sin su autorizaci&oacute;n y permiso expresos. Tambi&eacute;n prohibimos amenazar con exponer informaci&oacute;n privada o incentivar a otros a hacerlo. La publicaci&oacute;n de informaci&oacute;n de acceso p&uacute;blico no constituye una violaci&oacute;n de esta pol&iacute;tica. No permitimos ning&uacute;n contenido de explotaci&oacute;n sexual en StoryPlace, incluida ninguna descripci&oacute;n de actos sexuales con el &uacute;nico prop&oacute;sito de gratificaci&oacute;n sexual.&nbsp;</p>
                    <p>Este Acuerdo de publicaci&oacute;n (&laquo;Acuerdo&raquo;) es un contrato vinculante entre usted y StoryPlace (&laquo;nosotros&raquo;, &laquo;nos&raquo;, &laquo;nuestro&raquo;). Contiene las reglas y restricciones que rigen el uso de StoryPlace para distribuir su contenido all&iacute;.&nbsp;</p>
                    <p>El uso de StoryPlace de cualquier manera significa que usted acepta este Acuerdo y este Acuerdo permanecer&aacute; en vigor. Si hay una disputa entre usted y un tercero sobre cualquier tema, usted acepta que no tenemos ninguna obligaci&oacute;n de involucrarnos y que no seremos responsables de dicha disputa y que no le proporcionaremos ning&uacute;n asesoramiento legal sobre dichos asuntos. Puede se&ntilde;alar cualquier violaci&oacute;n de nuestros T&eacute;rminos de uso enviando un correo electr&oacute;nico a support@storyplace.com</p>
                    <p>&nbsp;</p>
                    <p>Servicios StoryPlace</p>
                    <p><br /></p>
                    <p>StoryPlace es un servicio empresarial y, para seguir ofreciendo el servicio y funcionando como empresa, usted entiende que a veces permitimos la publicidad en los Servicios, incluso en relaci&oacute;n con la visualizaci&oacute;n de su contenido u otra informaci&oacute;n. Tambi&eacute;n podemos utilizar su Contenido para promocionar los Servicios, pero nunca venderemos su contenido a terceros sin su permiso expl&iacute;cito.</p>
                    <p>Al utilizar la plataforma StoryPlace y sus servicios relacionados (los &laquo;Servicios&raquo;), puede celebrar t&eacute;rminos y condiciones adicionales y otros acuerdos que modifiquen o anulen estos T&eacute;rminos del Servicio, por ejemplo, cuando decida participar en un concurso, una solicitud especial o participar en una recopilaci&oacute;n patrocinada. En caso de conflicto o incoherencia, se le indicar&aacute;n los t&eacute;rminos y condiciones de esos t&eacute;rminos y acuerdos adicionales y prevalecer&aacute;n sobre estos T&eacute;rminos del Servicio.</p>
                    <h3>Problemas de derechos de autor</h3>
                    <p>StoryPlace ha adoptado una pol&iacute;tica respecto a la infracci&oacute;n de los derechos de autor en los Servicios de conformidad con la&nbsp;<a href="https://www.copyright.gov/legislation/dmca.pdf">United States Digital Millennium Copyright Act</a> (Ley de derechos de autor de la era digital, la &laquo;DMCA&raquo;, por sus siglas en ingl&eacute;s). Si bien nuestra pol&iacute;tica se basa en la legislaci&oacute;n estadounidense, aplicamos esta misma pol&iacute;tica a nivel mundial a todas las jurisdicciones en las que nuestros Servicios est&aacute;n disponibles. Si quiere presentar una reclamaci&oacute;n por infracci&oacute;n de derechos de autor, visite nuestra p&aacute;gina sobre c&oacute;mo&nbsp;denunciar una infracci&oacute;n de derechos de autor. StoryPlace se reserva el derecho de eliminar el contenido presuntamente infractor sin previo aviso, a nuestra entera discreci&oacute;n y sin responsabilidad ante usted ni ante ninguna otra persona.&nbsp;</p>
                    <h3>Pautas de contenido</h3>
                    <p>En StoryPlace, ofrecemos una amplia gama de historias y no censuramos ni modificamos arbitrariamente el contenido publicado, con el objetivo de crear un espacio seguro, inclusivo y c&oacute;modo para todos. Dicho esto, si una historia o un usuario infringen nuestro c&oacute;digo de conducta, su historia se eliminar&aacute; y la cuenta del usuario se bloquear&aacute; en la aplicaci&oacute;n/plataforma/Servicios. En StoryPlace, acogemos el anonimato, promovemos la amabilidad e imponemos la empat&iacute;a. Le pedimos que distinga el escuchar con estar de acuerdo y nos ayude a crear un espacio inclusivo y respetuoso para todos y sus historias. Queremos asegurarnos de que los usuarios de StoryPlace sepan qu&eacute; tipo de contenido pueden descubrir, as&iacute; como el contenido que pueden o no pueden publicar.</p>
                    <h3>C&oacute;digo de conducta de StoryPlace</h3>
                    <p>Al utilizar los Servicios de StoryPlace, usted acepta el siguiente c&oacute;digo de conducta.&nbsp;</p>
                    <ul>
                        <li>
                            <p>Publique sus pensamientos y sentimientos, no haga spam. No utilice StoryPlace para expresar discursos de odio, amenazas, comentarios ofensivos, opiniones pol&iacute;ticas divisivas, spam, publicidad o contenido irrelevante.</p>
                        </li>
                        <li>
                            <p>Separe la lectura de la aceptaci&oacute;n. No todas las personas tienen las mismas opiniones y eso est&aacute; bien. Respete la historia tal como se cuenta. Si no tiene nada bueno que decir, no lo diga.</p>
                        </li>
                        <li>
                            <p>&iexcl;La amabilidad es la clave! Trate todas las historias de la forma en que le gustar&iacute;a que trataran las suyas. Tenga en cuenta que compartir una historia es un acto de valent&iacute;a.</p>
                        </li>
                        <li>
                            <p>La empat&iacute;a no siempre es bonita. Tenga en cuenta que las lecciones m&aacute;s importantes de la vida a menudo provienen de historias que son dif&iacute;ciles de leer. Aprecie las diferentes perspectivas.</p>
                        </li>
                    </ul>
                    <p>&iexcl;Mantengase informado! Familiar&iacute;cese con nuestro C&oacute;digo de conducta, Pautas de contenido, T&eacute;rminos del servicio y Pol&iacute;tica de privacidad.</p>
                    <p>&iexcl;TRES ERRORES Y FUERA!</p>
                    <p>StoryPlace tiene una estricta regla de 3 ERRORES Y FUERA. Si su perfil es denunciado leg&iacute;timamente por violar 3 veces el c&oacute;digo de StoryPlace, se le prohibir&aacute; el uso de nuestros Servicios de forma indefinida. Recibir&aacute; una notificaci&oacute;n si se denuncia su cuenta (pero no la identidad de las partes denunciantes) y se revisan todos los informes. Si encuentra alg&uacute;n contenido que infrinja nuestras pautas, inf&oacute;rmenos denunci&aacute;ndolo.</p>
                    <p>SPAM: cualquier contenido que anuncie productos o servicios que no est&eacute;n relacionados con StoryPlace o que no est&eacute;n autorizados por StoryPlace no est&aacute; permitido y se eliminar&aacute;.</p>
                    <h3>Clasificaciones de historias en StoryPlace</h3>
                    <p>Algunas historias tienen contenido que puede considerarse &laquo;para adultos&raquo; o &laquo;delicado&raquo; para el p&uacute;blico en general. Se espera que todos los usuarios de StoryPlace clasifiquen sus historias en consecuencia si se aplica el siguiente criterio a su historia. Si encuentra una historia que ha sido valorada de forma incorrecta, puede hac&eacute;rnoslo saber denunci&aacute;ndola. Tenga en cuenta que cambiaremos su clasificaci&oacute;n si no cumple con estas pautas. Si no est&aacute; seguro de la categor&iacute;a de clasificaci&oacute;n de su historia, env&iacute;enos un correo electr&oacute;nico a support@storyplace.com y le guiaremos en este proceso.</p>
                    <p><br /></p>
                    <p>Clasificaci&oacute;n para adultos</p>
                    <p>Las historias para adultos est&aacute;n destinadas a un p&uacute;blico mayor de 18 a&ntilde;os. Una historia puede clasificarse como para adultos si contiene alguno de los siguientes elementos:</p>
                    <ul>
                        <li>
                            <p>Contenido sexual (que incluya relaciones sexuales y otros actos sexuales, incluidos, pero no limitados a, el sexo oral o la autogratificaci&oacute;n, tanto consentida como no consentida)</p>
                        </li>
                        <li>
                            <p>Uso excesivo de lenguaje obsceno</p>
                        </li>
                        <li>
                            <p>Drogas o sustancias que en general son ilegales o solo legales para personas mayores de 18 a&ntilde;os</p>
                        </li>
                    </ul>
                    <h3>Clasificaci&oacute;n sensible</h3>
                    <p>Las historias sensibles est&aacute;n destinadas a una audiencia que puede manejar contenido sensible desde el punto de vista emocional. Una historia puede clasificarse como sensible si contiene alguno de los siguientes elementos:</p>
                    <ul>
                        <li>
                            <p>Temas o escenas de autolesiones (incluidos el suicidio y los trastornos de la alimentaci&oacute;n)</p>
                        </li>
                        <li>
                            <p>Representaciones gr&aacute;ficas de violencia; que incluyen, pero no se limitan a: abuso sexual, verbal, emocional y f&iacute;sico.</p>
                        </li>
                    </ul>
                    <h3>PREGUNTAS FRECUENTES</h3>
                    <h3>&iquest;C&oacute;mo protege StoryPlace mi historia contra el robo?</h3>
                    <p>StoryPlace anima a todos los narradores a expresarse libremente y a expresar su creatividad a trav&eacute;s de historias originales y reales. No permitimos ninguna infracci&oacute;n de derechos de autor ni material pirateado en la plataforma y eliminaremos cualquier obra que descubramos que se ha publicado de forma ilegal. Si bien es posible que algunos usuarios no conozcan la ley de derechos de autor, hacemos todo lo posible para educar e informar a nuestra comunidad. Lea a continuaci&oacute;n para obtener m&aacute;s informaci&oacute;n sobre la ley de Derechos de autor:</p>
                    <p>Las plataformas StoryPlace est&aacute;n dise&ntilde;adas con la intenci&oacute;n de proteger a los narradores y sus historias en la medida de lo posible. Hemos adoptado varias medidas para ayudar a los usuarios de StoryPlace a sentirse seguros y limitar las infracciones de derechos de autor en nuestras plataformas:</p>
                    <ul>
                        <li>
                            <p>Las interacciones entre los usuarios de StoryPlace se gestionan con total transparencia para ambas partes. En el momento en que un usuario realiza alguna acci&oacute;n en una historia (la abre, la lee, descarga material, env&iacute;a un mensaje, etc.), esa acci&oacute;n queda registrada y un registro de actividad queda archivado y visible para ambas partes en todo momento.</p>
                        </li>
                        <li>
                            <p>Por ley, su obra queda protegida autom&aacute;ticamente en virtud de la ley de derechos de autor tan pronto como la pone en un formato fijo, por ejemplo, por escrito. Hay varias herramientas adicionales de licencias de derechos de autor que puede usar para enviar o registrar su obra antes de publicarla en StoryPlace, y puede encontrarlas en nuestro art&iacute;culo sobre derechos de autor. Tenga en cuenta que para obtener la m&aacute;xima protecci&oacute;n o demandar a alguien si alguien infringe su obra de forma ilegal, debe registrarla en la oficina de derechos de autor de su pa&iacute;s.</p>
                        </li>
                        <li>
                            <p>Nos regimos por el proceso DMCA, por lo que si cree que su trabajo ha sido copiado indebidamente, puede enviar una solicitud de retirada DMCA y le responderemos lo antes posible.</p>
                        </li>
                        <li>
                            <p>Las funciones de copiar/pegar tambi&eacute;n est&aacute;n deshabilitadas en StoryPlace, lo que impide que los usuarios copien f&aacute;cilmente su trabajo.</p>
                        </li>
                    </ul>
                    <h3>&iquest;Qu&eacute; se considera infracci&oacute;n de derechos de autor?</h3>
                    <ul>
                        <li>
                            <p>Publicar obras protegidas por derechos de autor de otras personas sin su consentimiento legal</p>
                        </li>
                        <li>
                            <p>Publicar en nombre de otra persona y darle cr&eacute;dito. Esto sigue siendo una violaci&oacute;n de los derechos de autor y se tratar&aacute; de la misma manera. SIEMPRE se requiere el consentimiento de la persona propietaria del material o la historia.</p>
                        </li>
                        <li>
                            <p>Adaptaciones o alteraciones leves de una obra, como cambiar de nombre, copiar los eventos y escribirlos con sus propias palabras, o simplemente cambiar un punto de vista.</p>
                        </li>
                        <li>
                            <p>Usar una imagen u otro archivo de v&iacute;deo o audio que no sea de su propiedad. Esto incluye hacer una portada con una imagen de la que no tenga los derechos (a menos que sea de dominio p&uacute;blico).</p>
                        </li>
                    </ul>
                    <p><br /></p>
                    <p>&iquest;Qu&eacute; protege y qu&eacute; no protege la ley de derechos de autor?</p>
                    <p>La ley de derechos de autor solo protege la representaci&oacute;n f&iacute;sica de una idea, no la idea en s&iacute; misma. Desafortunadamente, tramas, temas de historias y t&iacute;tulos similares no son suficientes para constituir una infracci&oacute;n de derechos de autor. Por eso hay muchas historias y pel&iacute;culas que se parecen mucho entre s&iacute;.</p>
                    <p>A menos que existan pruebas sustanciales de infracci&oacute;n de derechos de autor que puedan ser confirmadas en un tribunal de justicia (seg&uacute;n la jurisprudencia reciente), los administradores del sitio web no podr&aacute;n eliminar la historia. Si este es el caso, le sugerimos que intente ponerse en contacto con el otro escritor y tratar respetuosamente de resolver el problema en privado. Si no est&aacute; seguro de si una obra infringe sus derechos de autor, le recomendamos que busque asesoramiento profesional o legal antes de enviar una notificaci&oacute;n.</p>
                    <h3>&iquest;C&oacute;mo aborda StoryPlace las infracciones de derechos de autor?</h3>
                    <p>StoryPlace se toma muy en serio las infracciones de derechos de autor. Los usuarios no pueden publicar historias que no sean material original o que no sean de su propiedad, a menos que cuenten con el permiso legal del propietario y puedan proporcionar pruebas cuando se les solicite. Todas las obras publicadas que se nos denuncien o que descubramos se eliminar&aacute;n inmediatamente. Si la obra no se publica, solicitamos al propietario que presente un informe de infracci&oacute;n de derechos de autor y eliminaremos las obras infractoras lo antes posible.</p>
                    <p>&iquest;C&oacute;mo denuncio las infracciones de derechos de autor en StoryPlace?</p>
                    <p>Env&iacute;e un informe de infracci&oacute;n de derechos de autor en&nbsp;<a href="https://old.storyplace.com/en/copyright-claim">www.storyplace.com/copyright-claim</a> o env&iacute;enos un correo electr&oacute;nico a support@storyplace.com</p>
                    <p>Derechos de autor en su pa&iacute;s</p>
                    <p>Si quiere registrar su historia en la oficina de derechos de autor de su pa&iacute;s, hay muchos recursos en l&iacute;nea que le pueden ayudar. Puede buscar la oficina de derechos de autor de su pa&iacute;s en el Directorio de oficinas de propiedad intelectual de la OMPI en&nbsp;<a href="http://www.wipo.int/directory/en/urls.jsp">http://www.wipo.int/directory/en/urls.jsp</a>.</p>
                    <p>Si tiene alguna pregunta o comentario adicional, env&iacute;enos un correo electr&oacute;nico a support@storyplace.com</p>
                </LegalContainer>
            </>
        );
    }


    return (
        <>
            <LegalContainer>


                <h2>Content Guidelines</h2>
                <h3>Ownership of Your Story.</h3>
                <p>Before posting any content to either one of the StoryPlace platforms, we ask that you read our Content Guidelines. If your content does not comply with these guidelines it may be removed at any time.</p>
                <p>You own all the rights to the content you create and post on all Storyplace Services. However don&rsquo;t submit content you don&rsquo;t hold the copyright for, unless you have permission, including to grant Storyplace all the rights outlined in these terms.</p>
                <p>When you post content to Storyplace, we need the legal permission under applicable copyright laws to display that content to users of the Storyplace Services. Legally this means you give us a nonexclusive license to publish your content on the Storyplace Services, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it), as well as use it for marketing related content (social media, campaigns, PR and newsletters)</p>
                <p>You&rsquo;re responsible for the content you post. This means you assume all risks related to its publication and display, including someone else&rsquo;s reliance on its accuracy and any claims relating to intellectual property or other legal rights.</p>
                <p>Please read our guide on Copyrights for further information.</p>
                <p>Storyplace is a business service and to continue to offer the service and function as a business you understand that we sometimes enable advertising on the Services, including in connection with the display of your content or other information. We may also use your Content to promote the Services but we will never sell your content to third parties without your explicit permission.</p>
                <p>In your use of the Services, you may enter into additional terms and conditions and other agreements that alter or override these Terms of Service, such as when you choose to enter into a competition, special request, or submit to a sponsored collection. In case of any conflict or inconsistency, the terms and conditions of those additional terms and agreements would be stated to you and would override these Terms of Service.</p>
                <h3>Copyright Issues</h3>
                <p>Storyplace has adopted a policy toward copyright infringement on the Services in accordance with the <a href="https://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer">United States Digital Millennium Copyright Act</a> (the &ldquo;DMCA&rdquo;). While our policy is based on the US law we apply this same policy globally to all jurisdictions in which our Services are available. If you&rsquo;d like to submit a claim of copyright infringement, please visit our page on <span className="text-underline">Reporting Copyright Infringement</span>. Storyplace reserves the right to remove content alleged to be infringing without prior notice, at our sole discretion, and without liability to you or anyone else. In appropriate circumstances, we will also terminate a user&rsquo;s account if the user is determined to be a repeat infringer.</p>
                <h3>Content Guidelines</h3>
                <p>At StoryPlace, we offer a diverse range of stories and do not censor or modify the content posted, with the goal of creating a safe, inclusive and comfortable space for everyone. That being said, if a story or user violates our code of conduct, their story will be removed and the user&rsquo;s account will be blocked from the app. At Storyplace, we embrace anonymity, promote kindness and enforce empathy. We ask that you separate listening from agreeing and help us create an inclusive and respectful space for everyone and their stories. We want to ensure that Storyplace users know what type of content they can discover as well as content they can or cannot post.</p>
                <h3>Storyplace Code of Conduct</h3>
                <p>By using the Storyplace Services you agree to the following code of conduct.&nbsp;</p>
                <ul>
                    <li>Post your thoughts and feelings, not spam. Please do not use Storyplace to express any hate speech, threats, offensive comments, spam, advertising or irrelevant content.</li>
                    <li>Separate reading from agreeing. Not all people have the same opinions and that&rsquo;s OK. Respect the story as told. If you don&rsquo;t have anything good to say, don&rsquo;t say it.</li>
                    <li>Kindness is key! Treat all stories the way you would want yours to be treated. Keep in mind that sharing a story is an act of bravery.</li>
                    <li>Empathy is not always pretty. Keep in mind that life&rsquo;s biggest lessons often come from stories that are difficult to read. Appreciate different perspectives.</li>
                </ul>
                <p>Stay informed! Familiarize yourself with our Code of Conduct, Content Guidelines, Terms of Service and Privacy Policy.</p>
                <p>THREE STRIKES YOU&rsquo;RE OUT!</p>
                <p>StoryPlace has a strict 3 STRIKES AND YOU ARE OUT Rule. If your profile is rightfully reported for breaking Storyplace code 3 times, you will be banned indefinitely from using our services.&nbsp; You will be notified if your account is reported and all reports are reviewed. If you come across any content that violates our guidelines, let us know by reporting it.</p>
                <p>SPAM: Any content that advertises products or services unrelated to, or not sanctioned by Storyplace is not permitted and will be removed.</p>
                <h3>Story Ratings on StoryPlace</h3>
                <p>Some stories have content that can be considered &ldquo;Mature&rdquo; or &ldquo;Sensitive&rdquo; for a general audience. All StoryPlace users are expected to rate their stories accordingly if the following criterion applies to their story. If you come across a story that has been rated incorrectly, you can let us know by reporting it. Please note that we will change your rating if it does not comply with these guidelines. If you are unsure about your story&rsquo;s rating category, please email us at support@storyplace.com and we will guide you through this process.</p>
                <p>Mature Rating</p>
                <p>Mature stories are intended for an audience that is 18+ years of age. A story may be rated Mature if it contains any of the following:</p>
                <ul>
                    <li>Sexual content (involving sexual intercourse and other sexual acts, including, but not limited to, oral sex or self-gratification, both consensual and non-consensual)</li>
                    <li>Excessive use of curse words</li>
                    <li>Drugs or substances that are overall illegal or only legal for 18+ people</li>
                </ul>
                <h3>Sensitive Rating</h3>
                <p>Sensitive stories are intended for an audience that can emotionally handle delicate content. A story may be rated Sensitive if it contains any of the following:</p>
                <ul>
                    <li>Self-harm themes or scenes (including suicide and eating disorders)</li>
                    <li>Graphic depictions of violence; including but not limited to: sexual, verbal, emotional and physical abuse.</li>
                </ul>
                <h3>Copyright</h3>
                <p>StoryPlace encourages all storytellers to express themselves and their creativity freely through original and true stories. We do not allow any copyright infringement or pirated material on the platform and will remove any works that we discover to have been published illegally.</p>
                <p>While some users may not be aware of copyright law, we do our best to educate and inform our community. Please read below for more information about Copyright law:</p>
                <h3>How does Storyplace protect my story from being stolen?</h3>
                <p>The Storyplace platforms are designed with the intention of protecting Storytellers and their stories as much as possible. We have several measures in place to help Storyplace users feel safe and limit copyright infringement on our platforms:</p>
                <ul>
                    <li>Interactions between users on StoryPlace are managed with full transparency to both parties. The moment a user takes any action on a story, (opens it, reads it, downloads material, sends a message, etc.) that action is recorded and an activity record is kept on file and visible to both parties at all times.</li>
                    <li>By law, your work is automatically protected under Copyright Law as soon as you put it into a fixed format, such as writing it down. There are several additional copyright license tools that you can use to submit or register your work prior to posting on StoryPlace, and you can find them in our Copyrights article. Keep in mind that to get the most protection or sue if someone unlawfully infringes on your work, you need to register it in your country&rsquo;s copyright office.</li>
                    <li>We abide by the DMCA process, so if you believe your work has been copied improperly, you can submit a DMCA Takedown Request and we will respond as soon as possible.</li>
                    <li>The copy/paste functions are also disabled on StoryPlace, which prevents users from easily copying your work.</li>
                </ul>
                <h3>What is considered copyright infringement?</h3>
                <ul>
                    <li>Posting the copyrighted works of others without their legal consent</li>
                    <li>Posting on behalf of someone else and giving credit to them. This is still a violation of copyright and will be treated the same way. Consent is ALWAYS required from the person who owns the material or story.</li>
                    <li>Adaptations or slight alterations to a work, such as changing names, copying the events and writing them in your own words, or simply changing a point of view.</li>
                    <li>Using an image that you do not own. This includes making a cover with an image that you do not own the rights to (unless it is in the public domain).</li>
                </ul>
                <p>What does and doesn't copyright protect?</p>
                <p>Copyright only protects the physical representation of an idea, not the idea itself. Unfortunately, similar plots, story themes, and titles are not enough to constitute a copyright infringement. This is why there are many stories and movies that are very similar to each other.</p>
                <p>Unless there is substantial evidence of copyright infringement that can hold up in a court of law, website administrators will not be able to remove the story. If this is the case, we suggest you try to contact the other writer and respectfully try to resolve the issue in private. If you are unsure of whether a work infringes your copyright, we encourage you to seek professional/legal advice before submitting a notice.</p>
                <h3>How does StoryPlace deal with copyright infringement?</h3>
                <p>StoryPlace takes copyright infringement very seriously. Users are not permitted to post stories that are not original material or that they do not own unless they have legal permission from the owner and can provide evidence when requested. Any published works that are reported to us, or that we discover, are removed immediately. If the work is not published, we require the owner to submit a Copyright infringement report and we will remove infringing works as quickly as possible.</p>
                <p>How do I report copyright infringements on StoryPlace?</p>
                <p>Please submit a Copyright Infringement report by going to <a href="https://old.storyplace.com/en/copyright-claim" target="_blank" rel="noopener noreferrer">www.storyplace.com/copyright-claim</a> or email us at support@storyplace.com</p>
                <p><strong>Copyright in your country</strong></p>
                <p>If you want to register your story with your country&rsquo;s copyright office, there are a lot of resources online to help you. You can search for your country&rsquo;s copyright office through WIPO&rsquo;s Directory of Intellectual Property Offices at <a href="http://www.wipo.int/directory/en/urls.jsp" target="_blank" rel="noopener noreferrer">http://www.wipo.int/directory/en/urls.jsp</a>.</p>
                <p>&nbsp;If you have any additional questions or comments please email us at support@storyplace.com</p>

            </LegalContainer>

        </>

    )
}


export default ContentGuidelines;