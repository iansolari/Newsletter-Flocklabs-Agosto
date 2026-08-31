import Image from "next/image";
import { SectionTitle } from "@/components/newsletter/SectionTitle";
import { StatItem } from "@/components/newsletter/StatItem";
import { NumberedHighlight } from "@/components/newsletter/NumberedHighlight";
import { StoryBanner } from "@/components/newsletter/StoryBanner";
import { InitiativeCard } from "@/components/newsletter/InitiativeCard";
import { CommercialEntry } from "@/components/newsletter/CommercialEntry";
import { HeroShaderBackground } from "@/components/newsletter/HeroShaderBackground";

const SECTION = "px-6 py-20 md:px-16 md:py-32 lg:px-32";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] w-full items-end overflow-hidden md:min-h-screen">
        <HeroShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
        <div className="relative z-10 flex flex-col gap-6 px-6 pb-16 md:px-16 md:pb-24 lg:px-32">
          <div>
            <p className="font-serif text-4xl leading-tight font-light italic md:text-[64px] md:leading-[64px]">
              Agosto 2026
            </p>
            <h1 className="font-sans text-5xl leading-tight font-medium tracking-[-0.03em] md:text-[96px] md:leading-[88px]">
              I+D en movimiento
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-[26px] text-white/90 md:text-2xl">
            Las iniciativas, encuentros y aprendizajes más relevantes del equipo durante el
            último mes.
          </p>
        </div>
      </section>

      {/* Lo más destacado */}
      <section className={SECTION}>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <SectionTitle eyebrow="Agosto 2026 en i+d" lead="Lo más" italic="destacado" />
          <div className="flex max-w-md flex-col gap-4 text-base leading-[20px] text-white/90">
            <p>
              Durante agosto finalizamos dos iniciativas de investigación y presentamos seis
              nuevas propuestas vinculadas con Robótica, Agentes, Computer Vision y Experiencias
              Inmersivas.
            </p>
            <p>
              También participamos en Expo Industrias, avanzamos con una transferencia de
              conocimiento sobre mapas de calor y mantuvimos cinco encuentros comerciales con
              empresas interesadas en las soluciones del equipo.
            </p>
          </div>
        </div>
      </section>

      {/* El mes en breve */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/shader-1930-21-4.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-40"
        />
        <div className="relative z-10 flex flex-col gap-10 px-6 py-20 md:px-16 md:py-32 lg:px-32">
          <SectionTitle lead="El mes" italic="en breve" size="large" />
          <div className="flex flex-wrap gap-12 md:gap-20">
            <StatItem value="2" label="Iniciativas finalizadas" />
            <StatItem value="6" label="Nuevas propuestas presentadas" />
            <StatItem value="5" label="Reuniones comerciales y demostraciones" />
          </div>
        </div>
      </section>

      {/* Participamos en Expo Industrias */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/print-halftone33-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className={`relative z-10 ${SECTION} flex flex-col gap-10`}>
          <SectionTitle lead="Participamos en" italic="expo Industrias" />
          <div className="flex max-w-3xl flex-col gap-4 text-base leading-[20px] text-white/90">
            <p>
              El equipo participó en Expo Industrias y Servicios con la disertación “Cuando la IA
              sale de la pantalla: Physical AI en la Industria”.
            </p>
            <p>
              Federico Valentino Lacoste, Coordinador General; Mariano Ortega, Innovation
              Manager; y Daniel Natale, Senior Software Engineer, conversaron sobre cómo la
              inteligencia artificial comienza a intervenir en plantas, máquinas y procesos
              físicos.
            </p>
            <p>
              La charla explicó que incorporar IA en una operación requiere mucho más que
              implementar una tecnología. También es necesario definir qué decisiones puede
              tomar, quién es responsable del proceso y qué controles deben acompañar su
              funcionamiento.
            </p>
            <p>Estos fueron los 5 ejes centrales de la charla:</p>
          </div>
        </div>
      </section>

      <section className={`${SECTION} flex flex-col gap-10`}>
        <NumberedHighlight
          number={1}
          title="Usar IA no equivale a delegarle una operación"
          body="Entre analizar información y actuar sobre un proceso existe una transformación que requiere decisiones, integración y control."
        />
        <NumberedHighlight
          number={2}
          title="La autonomía se construye por niveles"
          body="Un sistema no debería pasar directamente de observar una operación a controlarla por completo. Cada nivel de autonomía debe evaluarse y validarse antes de avanzar."
        />
        <NumberedHighlight
          number={3}
          title="Las cámaras también pueden generar decisiones"
          body="Además de capturar imágenes, una cámara puede aportar información para detectar problemas, controlar procesos y tomar decisiones de negocio."
        />
        <NumberedHighlight
          number={4}
          title="La tecnología necesita un responsable"
          body="Un modelo puede funcionar correctamente, pero no generará resultados si no existe una persona responsable del proceso y de las decisiones que produce."
        />
        <NumberedHighlight
          number={5}
          title="La gobernanza permite utilizar IA con mayor seguridad"
          body="Definir responsabilidades, límites y mecanismos de control no impide avanzar. Ayuda a reducir riesgos y utilizar la tecnología de manera responsable."
        />
      </section>

      {/* Iniciativas finalizadas */}
      <section className={`${SECTION} flex flex-col gap-16`}>
        <div className="flex flex-col gap-6 md:max-w-xl">
          <SectionTitle lead="Iniciativas" italic="finalizadas" />
          <div className="flex flex-col gap-4 text-base leading-[20px] text-white/90">
            <p>
              Durante agosto concluyeron dos investigaciones relacionadas con experiencias
              inmersivas y robótica.
            </p>
            <p>
              La información disponible permite explicar el problema y el objetivo de cada
              trabajo. Sus resultados y conclusiones deberán incorporarse antes de publicar esta
              edición.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <StoryBanner
            image="/images/print-halftone2-1.jpg"
            imageAlt="Avatar con Unreal Engine"
            category="Experiencias Inmersivas"
            title="Avatar con Unreal Engine"
            paragraphs={[
              "Esta iniciativa evaluó la posibilidad de desarrollar una alternativa propia para crear avatares conversacionales con Unreal Engine y MetaHuman.",
              "La investigación surgió por las limitaciones de Simli, la herramienta externa utilizada hasta el momento. Su dependencia implicaba costos recurrentes y reducía las posibilidades de personalización, integración y control técnico.",
              "El objetivo fue conocer si una solución propia podía ofrecer mayor control sobre el avatar y facilitar su uso en diferentes experiencias desarrolladas por el equipo.",
            ]}
          />
          <StoryBanner
            image="/images/print-halftone-2.jpg"
            imageAlt="Navegación simulada de cuadrúpedo"
            category="Robótica"
            title="Navegación simulada de cuadrúpedo"
            paragraphs={[
              "La investigación analizó la posibilidad de integrar un robot cuadrúpedo comercial con un sistema abierto de navegación autónoma.",
              "El trabajo estuvo orientado a conocer las capacidades reales del hardware, las herramientas disponibles para programarlo y los tipos de aplicaciones que podrían desarrollarse sobre esta tecnología.",
              "También se evaluaron los kits de desarrollo y las interfaces disponibles para determinar qué nivel de control podía alcanzar el equipo.",
            ]}
          />
        </div>
      </section>

      {/* Compartimos lo aprendido */}
      <section className={`${SECTION} flex flex-col gap-10`}>
        <SectionTitle lead="Compartimos" italic="lo aprendido" />
        <StoryBanner
          image="/images/shader-1930-02-2.jpg"
          imageAlt="Cierre de la POC de mapas de calor"
          category="Transferencia de conocimiento · Computer Vision"
          title="Cierre de la POC de mapas de calor"
          paragraphs={[
            "Como parte del cierre de su prueba de concepto sobre mapas de calor, Luisi realizará una capacitación interna para compartir el trabajo con el resto del equipo.",
            "Aunque la actividad está prevista para la semana siguiente, se incluye en esta edición porque forma parte del cierre de la iniciativa desarrollada durante agosto.",
            "La capacitación presentará el problema investigado, el trabajo realizado y los principales aprendizajes de la prueba de concepto.",
          ]}
        />
      </section>

      {/* Nuevas iniciativas */}
      <section className={`${SECTION} flex flex-col gap-16`}>
        <SectionTitle lead="Nuevas" italic="iniciativas" />
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          <InitiativeCard
            accent="/images/shader-1930-21-5.jpg"
            category="Robótica"
            title="Robótica aérea con UAV"
            paragraphs={[
              "La iniciativa propone investigar el uso, la programación y la navegación autónoma de vehículos aéreos no tripulados.",
              "El objetivo es evaluar su aplicación en inspecciones de zonas de difícil acceso y analizar cómo podrían complementar las capacidades actuales del robot cuadrúpedo Go2 EDU.",
            ]}
          />
          <InitiativeCard
            accent="/images/shader-1929-37-2.jpg"
            category="Agentes"
            title="Pipeline de IA para Expo Industrial"
            paragraphs={[
              "La propuesta busca aprovechar la información recopilada durante eventos industriales para identificar oportunidades comerciales relevantes.",
              "A partir del registro mediante un código QR, el sistema obtendría información sobre el visitante, su empresa y sus intereses. Luego utilizaría inteligencia artificial para generar una recomendación relacionada con sus necesidades.",
            ]}
          />
          <InitiativeCard
            accent="/images/shader-1930-02-2.jpg"
            category="Computer Vision"
            title="Detección de plagas en pistachos"
            paragraphs={[
              "La iniciativa propone detectar plagas y enfermedades en plantaciones de pistacho mediante cámaras instaladas en maquinaria agrícola.",
              "El sistema analizaría las imágenes tomadas durante el recorrido y enviaría alertas geolocalizadas al responsable de la producción. Esto ayudaría a localizar posibles problemas sin depender solamente de inspecciones manuales.",
            ]}
          />
          <InitiativeCard
            accent="/images/shader-1930-21-5.jpg"
            category="Computer Vision"
            title="Medición de ciclos productivos"
            paragraphs={[
              "En algunos procesos productivos, la duración de las tareas manuales se mide mediante observación directa. Este trabajo requiere tiempo y puede producir resultados diferentes según la persona que realiza el análisis.",
              "La propuesta busca utilizar Computer Vision para registrar y medir automáticamente los ciclos de trabajo. La información obtenida podría utilizarse en estudios de procesos y planificación productiva.",
            ]}
          />
          <div className="md:col-span-2">
            <InitiativeCard
              accent="/images/shader-1930-32-2.jpg"
              category="Experiencias Inmersivas"
              title="Clones digitales fotorrealistas"
              paragraphs={[
                "La iniciativa propone crear representaciones digitales de personas mediante técnicas de fotogrametría.",
                "Estos modelos podrían utilizarse en experiencias educativas, actividades de entretenimiento y entornos virtuales. La investigación también evaluaría cómo simplificar el proceso para personas sin conocimientos técnicos especializados.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Participaciones comerciales */}
      <section className={`${SECTION} flex flex-col gap-10`}>
        <div className="flex flex-col gap-6 md:max-w-xl">
          <SectionTitle lead="Participaciones" italic="comerciales" />
          <p className="text-base leading-[20px] text-white/90">
            Durante agosto se realizaron cinco reuniones comerciales y demostraciones. Dos de los
            encuentros correspondieron al seguimiento de una misma oportunidad con 360Energy.
          </p>
        </div>
        <div className="flex flex-col divide-y divide-white/10">
          <CommercialEntry
            image="/images/fdq-1.jpg"
            imageAlt="José Cabral"
            category="Computer Vision"
            title="José Cabral"
            reverse
            paragraphs={[
              "El encuentro permitió conocer las necesidades del cliente y explicar cómo trabaja el equipo durante una investigación.",
              "El próximo paso es precisar los casos de uso conversados y preparar una propuesta con las posibles etapas del trabajo.",
            ]}
          />
          <CommercialEntry
            image="/images/cvv-1.jpg"
            imageAlt="Pallets Marcel"
            category="Computer Vision y Robótica"
            title="Pallets Marcel"
            paragraphs={[
              "Durante la reunión se identificaron oportunidades relacionadas con la inspección automática de madera y pallets.",
              "Entre los casos analizados se encuentran la detección de defectos en tablas, el control de calidad mediante visión artificial y la posible automatización de tareas de manipulación y reparación con un brazo robótico.",
              "El equipo deberá evaluar cuáles de estas oportunidades son viables y cómo podría organizarse una propuesta.",
            ]}
          />
          <CommercialEntry
            image="/images/gdfgs-1.jpg"
            imageAlt="360Energy"
            category="Producto"
            title="360Energy"
            reverse
            paragraphs={[
              "360Energy necesita organizar y ampliar el proceso de capacitación de los ingenieros que participan en sus proyectos solares.",
              "Trainly podría utilizarse para organizar la documentación interna como contenido formativo, centralizar las capacitaciones y evaluar la comprensión de los participantes mediante inteligencia artificial.",
              "Luego del primer encuentro, se presentó una propuesta con su alcance y esquema económico. El cliente deberá revisarla internamente y coordinar una nueva demostración para continuar con la evaluación.",
            ]}
          />
          <CommercialEntry
            image="/images/fvw23-1.jpg"
            imageAlt="Farmacity"
            category="Agentes"
            title="Farmacity"
            paragraphs={[
              "El equipo presentó una demostración del agente de voz y explicó sus posibles aplicaciones.",
              "Farmacity mostró interés en la solución y evaluará internamente en qué procesos podría implementarla. Luego comunicará si desea avanzar y qué necesidades deberían contemplarse.",
            ]}
          />
        </div>
      </section>

      {/* Seguimos compartiendo nuestros avances */}
      <section className={`${SECTION} flex flex-col items-center gap-12 md:flex-row md:justify-between`}>
        <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full md:w-64">
          <Image
            src="/images/shader-1930-21-7.jpg"
            alt=""
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 text-center md:max-w-xl md:text-left">
          <p className="font-sans text-4xl leading-tight font-medium tracking-[-0.03em] md:text-[64px] md:leading-[68px]">
            Seguimos compartiendo{" "}
            <span className="font-serif text-[1.1em] leading-tight font-light italic">
              nuestros avances
            </span>
          </p>
          <div className="flex flex-col gap-3 text-base leading-[20px] text-white/90">
            <p>
              Este newsletter reúne una selección de las actividades más relevantes del equipo
              durante el mes.
            </p>
            <p>
              Su objetivo es facilitar el seguimiento de las investigaciones, los aprendizajes y
              las oportunidades comerciales mediante información breve, clara y contextualizada.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-6 px-6 py-16 md:px-16">
        <div className="relative h-8 w-9">
          <Image src="/images/vector-1.svg" alt="Flock Labs" fill className="object-contain" />
        </div>
        <p className="text-xl text-white/90">I+D Flock Labs / Agosto 2026</p>
      </footer>
    </main>
  );
}
