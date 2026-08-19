import RevealObserver from './components/RevealObserver'
import CharacterPortrait from './components/CharacterPortrait'

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* ── Navigation ── */}
      <nav className="top">
        <a href="#top" className="brand">
          <span>KOI IRO</span>
          <span className="ja">暗い色</span>
        </a>
        <ul>
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#world">World</a></li>
          <li><a href="#cosmology">Cosmology</a></li>
          <li><a href="#characters">Characters</a></li>
          <li><a href="#arc">Arc</a></li>
        </ul>
        <a
          href="https://instagram.com/koiiro.official"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Follow
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="top">
        <div className="kanji-bg">暗</div>
        <div className="eyebrow">An Original 7-Volume Manga Series</div>
        <h1>KOI IRO</h1>
        <div className="kanji">暗 い 色</div>
        <div className="tagline">
          In a post-apocalyptic Earth where humanity has forgotten the fourteen cosmic realms that
          hold reality together, a girl named for a paradox must traverse every Loka of Vedic
          cosmology to witness the turn of an age.
        </div>
        <div className="divider">◐</div>
      </section>

      {/* ── Philosophy ── */}
      <section className="philosophy" id="philosophy">
        <div className="container">
          <div className="section-num">01 / Philosophy</div>
          <h2 className="section-title">
            The Dark Was Never <span>the End</span>
          </h2>
          <p className="lead">
            The name <em>Koi Iro</em> (暗い色) translates from Japanese as &ldquo;dark colour.&rdquo; It
            is a contradiction that turned out to be a description.
          </p>
          <p>
            In Vedic philosophy, darkness is not the absence of light. It is the soil from which
            light grows. The foundation that holds the building. The night that precedes every dawn.
            The age that ends so a new age may begin.
          </p>
          <p>
            This is the worldview at the centre of <strong>Koi Iro</strong> — a story in which a
            half-Indian, half-Japanese girl with both colours braided into her eyes must descend
            through every realm of Vedic cosmology to prove a single thesis: origin does not
            determine nature. A demon-king becomes the most generous being in creation. A celestial
            lord becomes the most corrupt. A Naga deserter becomes the bravest commander. A barkeeper
            holds the cosmos together with stubbornness and love.
          </p>
          <div className="pull">
            &ldquo;The dark was never the end. It was the soil. And from the soil: the garden.&rdquo;
          </div>
        </div>
      </section>

      {/* ── World ── */}
      <section id="world">
        <div className="container">
          <div className="section-num">02 / World</div>
          <h2 className="section-title">
            A Broken Earth, <span>a Forgotten Cosmos</span>
          </h2>
          <div className="two-col">
            <div>
              <p className="lead">
                Earth, after the Third World War, lies in ruins. Four clans survive in the wreckage
                — unaware that their reality is one of fourteen interconnected cosmic realms.
              </p>
              <p>
                Across the Eastern continent stretch the bones of the world that was. Coastal
                megacities have collapsed into salt and rust. Forests have reclaimed concrete. The
                skies remember fire. And humanity, having forgotten the Lokas of Vedic cosmology that
                once gave structure to existence, holds the anchor of all fourteen realms without
                knowing it carries the load.
              </p>
              <p>
                When the anchor begins to crack, only three beings — a scavenger, a barkeeper, and a
                child — can read the signs in time. And to mend it, they must remember what the world
                forgot.
              </p>
            </div>
            <div className="world-card">
              <h3>The Four Clans</h3>
              <ul>
                <li>
                  <strong>Ashborn</strong> <span>Order, occupation</span>
                </li>
                <li>
                  <strong>Radars</strong> <span>Intelligence, precision</span>
                </li>
                <li>
                  <strong>Iron Howl</strong> <span>Craft, forge</span>
                </li>
                <li>
                  <strong>Thornveil</strong> <span>Forest, healing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cosmology ── */}
      <section className="cosmology" id="cosmology">
        <div className="container">
          <div className="section-num">03 / Cosmology</div>
          <h2 className="section-title">
            The Fourteen Lokas <span>Within Your Body</span>
          </h2>
          <p className="lead">The universe was never out there. It was always inside you.</p>
          <p>
            In Vedic cosmology, the 14 Lokas are not distant mythological places. In{' '}
            <strong>Koi Iro</strong>, they map directly onto the human chakra system. Seven realms
            ascend from the crown to the hips. Seven realms descend from the hips to the soles. The
            Charachari Mudra — &ldquo;Wake and Walk&rdquo; — allows trained beings to travel between
            realms by resonating with each Loka&apos;s frequency from within their own body.
          </p>

          <div className="lokas-grid">
            <div className="loka upper">
              <span className="num">14 ↑ CROWN</span>
              <span className="name">SATYA</span>
              <span className="body">Sahasrara</span>
              <span className="desc">The realm of absolute truth</span>
            </div>
            <div className="loka upper">
              <span className="num">13 ↑ THIRD EYE</span>
              <span className="name">TAPA</span>
              <span className="body">Ajna</span>
              <span className="desc">The realm of inner heat &amp; austerity</span>
            </div>
            <div className="loka upper">
              <span className="num">12 ↑ THROAT</span>
              <span className="name">JANA</span>
              <span className="body">Vishuddha</span>
              <span className="desc">The realm of creation — Neil&apos;s home</span>
            </div>
            <div className="loka upper">
              <span className="num">11 ↑ HEART</span>
              <span className="name">MAHAR</span>
              <span className="body">Anahata</span>
              <span className="desc">The realm of wisdom &amp; connection</span>
            </div>
            <div className="loka upper">
              <span className="num">10 ↑ SOLAR</span>
              <span className="name">SVAR</span>
              <span className="body">Manipura</span>
              <span className="desc">The celestial paradise — Surath&apos;s realm</span>
            </div>
            <div className="loka upper">
              <span className="num">09 ↑ SACRAL</span>
              <span className="name">BHUVAR</span>
              <span className="body">Svadhishthana</span>
              <span className="desc">The realm of air &amp; creation — Iro&apos;s lineage</span>
            </div>
            <div className="loka upper">
              <span className="num">08 ↔ ROOT</span>
              <span className="name">BHU</span>
              <span className="body">Muladhara</span>
              <span className="desc">Earth — the cosmic anchor</span>
            </div>
            <div className="loka lower">
              <span className="num">07 ↓ HIP</span>
              <span className="name">ATALA</span>
              <span className="body">Hip line</span>
              <span className="desc">Realm of illusion</span>
            </div>
            <div className="loka lower">
              <span className="num">06 ↓ THIGH</span>
              <span className="name">VITALA</span>
              <span className="body">Upper thigh</span>
              <span className="desc">Material transmutation — Hataka&apos;s home</span>
            </div>
            <div className="loka lower">
              <span className="num">05 ↓ KNEE</span>
              <span className="name">SUTALA</span>
              <span className="body">Knee</span>
              <span className="desc">Generosity — Bali&apos;s kingdom</span>
            </div>
            <div className="loka lower">
              <span className="num">04 ↓ CALF</span>
              <span className="name">TALATALA</span>
              <span className="body">Calf</span>
              <span className="desc">Architecture of reality — Rishi&apos;s origin</span>
            </div>
            <div className="loka lower">
              <span className="num">03 ↓ ANKLE</span>
              <span className="name">MAHATALA</span>
              <span className="body">Ankle</span>
              <span className="desc">The Naga realm — Taksha&apos;s home</span>
            </div>
            <div className="loka lower">
              <span className="num">02 ↓ ARCH</span>
              <span className="name">RASATALA</span>
              <span className="body">Foot arch</span>
              <span className="desc">The shadow realm — Mira&apos;s command</span>
            </div>
            <div className="loka lower">
              <span className="num">01 ↓ SOLES</span>
              <span className="name">PATALA</span>
              <span className="body">Sole</span>
              <span className="desc">The foundation — Iro&apos;s maternal line</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mudra / Five Emotions ── */}
      <section className="mudra" id="mudra">
        <div className="container">
          <div className="section-num">04 / The Five Emotions</div>
          <h2 className="section-title">
            A Chord, <span>Not a Cage</span>
          </h2>
          <p className="lead">
            Power in Koi Iro requires the simultaneous control of five emotions — held as a single
            chord. Not suppressed. Not denied. Harmonised.
          </p>

          <div className="emotions">
            <div className="emotion">
              <span className="sym">欲</span>
              <div className="name">KAAM</div>
              <div className="meaning">Desire</div>
            </div>
            <div className="emotion">
              <span className="sym">怒</span>
              <div className="name">KRODH</div>
              <div className="meaning">Anger</div>
            </div>
            <div className="emotion">
              <span className="sym">貪</span>
              <div className="name">LOBH</div>
              <div className="meaning">Greed</div>
            </div>
            <div className="emotion">
              <span className="sym">執</span>
              <div className="name">MOH</div>
              <div className="meaning">Attachment</div>
            </div>
            <div className="emotion">
              <span className="sym">嫉</span>
              <div className="name">MATSARJYA</div>
              <div className="meaning">Envy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead Characters ── */}
      <section className="characters" id="characters">
        <div className="container">
          <div className="section-num">05 / Characters</div>
          <h2 className="section-title">
            The Three <span>Who Remember</span>
          </h2>
          <p className="lead">
            Three beings who carry the weight of fourteen realms — a girl named for a contradiction,
            a foundling who builds worlds, and a child who draws them.
          </p>

          <div className="leads">
            {/* Iro */}
            <div className="char-card iro">
              <div className="kanji-watermark">色</div>
              <div className="top">
                <div className="role">Protagonist</div>
                <h3>IRO KUROSAKI</h3>
                <div className="title">The Dark Colour</div>
              </div>
              <div className="portrait">
                <CharacterPortrait src="/characters/iro.webp" alt="Iro Kurosaki" />
              </div>
              <div className="bottom">
                <dl className="traits">
                  <dt>Origin</dt>
                  <dd>Bhuvar / Patala</dd>
                  <dt>Power</dt>
                  <dd>The nameless colour</dd>
                  <dt>Role</dt>
                  <dd>The bridge</dd>
                </dl>
                <p>
                  Half-Indian, half-Japanese. Born of Bhuvar Loka with Patala Loka maternal lineage.
                  The bridge between dark and light. Her name means &ldquo;dark colour&rdquo; — a
                  contradiction that turned out to be a description.
                </p>
              </div>
            </div>

            {/* Rishi */}
            <div className="char-card">
              <div className="kanji-watermark">建</div>
              <div className="top">
                <div className="role">Architect</div>
                <h3>RISHI</h3>
                <div className="title">The Builder</div>
              </div>
              <div className="portrait">
                <CharacterPortrait src="/characters/rishi.webp" alt="Rishi" />
              </div>
              <div className="bottom">
                <dl className="traits">
                  <dt>Origin</dt>
                  <dd>Talatala</dd>
                  <dt>Power</dt>
                  <dd>Structural reshaping</dd>
                  <dt>Role</dt>
                  <dd>The architect</dd>
                </dl>
                <p>
                  A foundling from Talatala Loka raised on Earth. Architect of realities. The
                  barkeeper who built a community from rubble and discovered, decades later, that he
                  was building the cosmic anchor.
                </p>
              </div>
            </div>

            {/* Neil */}
            <div className="char-card">
              <div className="kanji-watermark">創</div>
              <div className="top">
                <div className="role">Creator</div>
                <h3>NEIL</h3>
                <div className="title">The Creator Child</div>
              </div>
              <div className="portrait">
                <CharacterPortrait src="/characters/neil.webp" alt="Neil" />
              </div>
              <div className="bottom">
                <dl className="traits">
                  <dt>Origin</dt>
                  <dd>Jana</dd>
                  <dt>Power</dt>
                  <dd>Srishti Shakti</dd>
                  <dt>Role</dt>
                  <dd>The truth-seer</dd>
                </dl>
                <p>
                  A child connected to Jana Loka, carrying Srishti Shakti — the power of creation.
                  The boy who draws worlds and accidentally makes them real.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Supporting Cast ── */}
      <section>
        <div className="container">
          <div className="section-num">06 / Supporting Cast</div>
          <h2 className="section-title">
            The Sangha <span>&amp; Their Allies</span>
          </h2>
          <p className="lead">
            Those who gathered around a bonfire in a broken city and decided to hold the cosmos
            together.
          </p>

          <div className="cast-elevated">
            <div className="companion-card">
              <div className="portrait">
                <CharacterPortrait src="/characters/revati-amma.webp" alt="Revati Amma" />
              </div>
              <div className="label">
                <div className="name">REVATI AMMA</div>
                <div className="title">The Companion Soul</div>
                <p>
                  The old woman by the bonfire who told stories since before time kept track. A
                  consciousness loved across every lifetime. Her prayers held the anchor when nothing
                  else could.
                </p>
              </div>
            </div>
            <div className="companion-card">
              <div className="portrait">
                <CharacterPortrait src="/characters/ashwattha.webp" alt="Ashwattha" />
              </div>
              <div className="label">
                <div className="name">ASHWATTHA</div>
                <div className="title">The Earth Yogi</div>
                <p>
                  The wandering teacher who arrived at a bar one evening and taught the Charachari
                  Mudra. His consciousness now lives in the crowns of those he touched.
                </p>
              </div>
            </div>
          </div>

          <div className="cast-caption">Still text-only, pending art</div>
          <div className="cast-grid">
            <div className="cast-item">
              <div className="name">BALI</div>
              <div className="title">The Trickster-King of Sutala</div>
              <p>
                The patchwork-coated ruler of the realm of generosity. A king who perches on the
                armrest of his own throne. Proves that giving is structurally superior to taking.
              </p>
            </div>
            <div className="cast-item">
              <div className="name">TAKSHA</div>
              <div className="title">The Naga Who Stayed</div>
              <p>
                A young Naga from Mahatala who fled his realm and found a community that saw the
                serpent and stayed. Becomes Border Commander; later, the bridge between species.
              </p>
            </div>
            <div className="cast-item">
              <div className="name">KIARA</div>
              <div className="title">The Healer Who Holds</div>
              <p>
                A Shadowken refugee whose clinic door is always open. The centre that held when
                everything else moved. Rishi&apos;s quiet love story.
              </p>
            </div>
            <div className="cast-item">
              <div className="name">HATAKA</div>
              <div className="title">The Merchant of Vitala</div>
              <p>
                A trader who was not a trader — a Vitala noble in disguise. Material transmutation
                through gold rings. The alliance&apos;s logistical foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Conspiracy ── */}
      <section>
        <div className="container">
          <div className="section-num">07 / The Conspiracy</div>
          <h2 className="section-title">
            The Ones Who <span>Refused to Wait</span>
          </h2>
          <p className="lead">
            They are not evil. They are beings with genuine grievances who chose the wrong methods.
            The conspiracy of the new order.
          </p>

          <div className="cast-grid">
            <div className="cast-item dark">
              <div className="name">BHARAN</div>
              <div className="title">The Sage of Certainty</div>
              <p>
                The Mahar Lok consciousness who weaponised the highest discipline of his realm.
                Violated minds in service of his fear of chaos. The corruption of certainty itself.
              </p>
            </div>
            <div className="cast-item dark">
              <div className="name">SURATH</div>
              <div className="title">The Celestial</div>
              <p>
                The lord of Svarga who watched humanity destroy itself for two thousand years — and
                concluded the cosmic anchor could not be trusted to mortals. Corrupted paradise to
                preserve it.
              </p>
            </div>
            <div className="cast-item dark">
              <div className="name">MIRA</div>
              <div className="title">The Rasatala General</div>
              <p>
                A Danava commander whose daughter once asked: &ldquo;Why do they call us
                dark?&rdquo; Her grievance is real. Her methods are not. The most sympathetic of the
                antagonists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Arc ── */}
      <section className="arc" id="arc">
        <div className="container">
          <div className="section-num">08 / The Arc</div>
          <h2 className="section-title">
            From Kali Yuga <span>to Sat Yuga</span>
          </h2>
          <p className="lead">
            Seven volumes — deliberately mirroring the seven upper and seven lower Lokas. The turning
            of an age, told as a journey through every realm of creation.
          </p>

          <div className="arc-flow">
            <div className="arc-line"></div>

            <div className="arc-step left">
              <div className="content">
                <h4>The Earth Arc</h4>
                <p>
                  A scavenger saves a hungry child. A bar becomes a sanctuary. The Charachari Mudra
                  is taught for the first time in centuries.
                </p>
              </div>
              <div className="marker">壱</div>
              <div></div>
            </div>

            <div className="arc-step right">
              <div></div>
              <div className="marker">弐</div>
              <div className="content">
                <h4>The Crossing</h4>
                <p>
                  The party travels through the lower Lokas. Sutala. Talatala. Mahatala. Each realm
                  reveals itself; each prejudice dissolves.
                </p>
              </div>
            </div>

            <div className="arc-step left">
              <div className="content">
                <h4>The Depths</h4>
                <p>
                  Iro descends to Patala alone — to the floor of creation, where her mother&apos;s
                  footprints still glow. She returns whole.
                </p>
              </div>
              <div className="marker">参</div>
              <div></div>
            </div>

            <div className="arc-step right">
              <div></div>
              <div className="marker">四</div>
              <div className="content">
                <h4>The Lok Sabha</h4>
                <p>
                  The first cosmic council in millennia. The four human clans converge. The war is
                  declared.
                </p>
              </div>
            </div>

            <div className="arc-step left">
              <div className="content">
                <h4>The War</h4>
                <p>
                  Three fronts. Every power awakened. Iro&apos;s body becomes the fault line through
                  which the age itself begins to turn.
                </p>
              </div>
              <div className="marker">五</div>
              <div></div>
            </div>

            <div className="arc-step right">
              <div></div>
              <div className="marker">六</div>
              <div className="content">
                <h4>Sat Yuga</h4>
                <p>
                  The new age does not reverse the hierarchy — it dissolves it. The fourteen realms
                  become organs of a single body. Every realm essential. None superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Series Stats ── */}
      <section className="series">
        <div className="container">
          <div className="section-num" style={{ textAlign: 'center', display: 'block' }}>
            09 / The Work
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            A Thirteen-Year <span>Story</span>
          </h2>
          <p
            className="lead"
            style={{ margin: '0 auto 3rem', textAlign: 'center', border: 'none', padding: 0 }}
          >
            Complete. Copyright-filed. Production-ready.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="num">7</div>
              <div className="label">Volumes</div>
            </div>
            <div className="stat">
              <div className="num">85</div>
              <div className="label">Chapters</div>
            </div>
            <div className="stat">
              <div className="num">14</div>
              <div className="label">Lokas</div>
            </div>
            <div className="stat">
              <div className="num">9</div>
              <div className="label">Copyrights</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Creator ── */}
      <section className="creator-section">
        <div className="container">
          <div className="section-num">10 / Creator</div>
          <h2 className="section-title">
            About <span>the Author</span>
          </h2>
          <div className="creator">
            <div className="creator-portrait"></div>
            <div>
              <p className="lead">
                Reema Majumdar is a tech professional based in Noida, India. Koi Iro has been a
                thirteen-year creative journey — beginning in 2013 with the first hand-drawn manga
                pages, and culminating in eight years of screenplay writing.
              </p>
              <p>
                The series was conceived from a deep belief that the next generation deserves access
                to thousands of years of Vedic philosophical wisdom — and that the manga medium is
                uniquely positioned to carry that wisdom to a global audience without losing its
                depth.
              </p>
              <p>
                The story was conceived in 2013 with a thirteen-page hand-drawn manga prototype.
                After years of quiet development, the full screenplay began taking shape in 2018. The
                complete 85-chapter screenplay was finished in April 2026. All copyrights have been
                filed with the Government of India Copyright Office.
              </p>
              <p>
                The art is yet to be drawn. The story is ready. If you are an artist, a publisher,
                or a believer in Indian mythology meeting the manga medium — the door is open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <span className="kanji-large">暗</span>
        <h2>KOI IRO</h2>
        <div className="quote">&ldquo;The dark was never the end. It was the soil.&rdquo;</div>
        <div className="links">
          <a
            href="https://instagram.com/koiiro.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:koiiro.official@gmail.com">Email</a>
          <a href="#characters">Characters</a>
          <a href="#cosmology">Lokas</a>
        </div>
        <div className="copyright">
          © REEMA MAJUMDAR 2026 · ALL RIGHTS RESERVED · KOI IRO 暗い色
        </div>
      </footer>
    </>
  )
}
