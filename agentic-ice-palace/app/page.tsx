"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import styles from "./page.module.css";

type StoryBeat = {
  speaker: "दादी" | "बंदर" | "वर्णन";
  line: string;
  vibe: "warm" | "cool";
};

type Snowflake = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
};

const storyBeats: StoryBeat[] = [
  {
    speaker: "वर्णन",
    line: "राजस्थान की तपती धरती पर रहने वाली दादी को हमेशा से ठंड पसंद थी।",
    vibe: "warm",
  },
  {
    speaker: "दादी",
    line: "क्यों न यहाँ गरमी में एक बर्फ़ का घर बना लूँ!",
    vibe: "cool",
  },
  {
    speaker: "वर्णन",
    line: "दादी मैदान में पहुँची और ठंडी–ठंडी जादुई बर्फ़ इकट्ठा करने लगीं।",
    vibe: "cool",
  },
  {
    speaker: "बंदर",
    line: "दादी, मैं मदद करूँ?",
    vibe: "warm",
  },
  {
    speaker: "दादी",
    line: "क्यों नहीं बेटा, आज हम दोनों मिलकर बर्फ़ का महल बनाएँगे!",
    vibe: "cool",
  },
  {
    speaker: "वर्णन",
    line: "दोनों ने गोल–गोल बर्फ़ के ब्लॉक बनाए और एक सुंदर सफेद घर खड़ा कर दिया।",
    vibe: "cool",
  },
  {
    speaker: "दादी",
    line: "दरवाज़े पर मेरी बर्फ़ की रंगोली भी सज गई!",
    vibe: "warm",
  },
  {
    speaker: "बंदर",
    line: "दादी, ये घर तो पूरा राजसी लग रहा है!",
    vibe: "warm",
  },
  {
    speaker: "वर्णन",
    line: "शाम तक दोनों उस ठंडे घर में बैठकर छाछ पीते रहे और गर्मी भूल गए।",
    vibe: "cool",
  },
];

const magicNotes = [
  "रंगोली की चमक शाम ढलते ही आसमान में सितारे खींच लाती है।",
  "बंदर की पूँछ से छत पर बने पैटर्न हर बार नए होते हैं।",
  "बर्फ़ का यह घर सूरज की किरणों से भी पिघलता नहीं—क्योंकि यह कल्पनाओं का जादू है!",
];

const generateSnowflakes = (count: number): Snowflake[] =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 4,
    size: 8 + Math.random() * 12,
    opacity: 0.3 + Math.random() * 0.5,
  }));

const snowflakes = generateSnowflakes(42);

export default function Home() {
  const [activeBeat, setActiveBeat] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);

  const highlightBeat = (index: number) => {
    setActiveBeat(index);
    setNoteIndex((prev) => (prev + 1) % magicNotes.length);
  };

  return (
    <div className={styles.page}>
      <div className={styles.skyGlow} />
      <div className={styles.snowfield}>
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className={styles.snowflake}
            style={
              {
                "--left": `${flake.left}%`,
                "--duration": `${flake.duration}s`,
                "--delay": `${flake.delay}s`,
                "--size": `${flake.size}px`,
                "--opacity": flake.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.tag}>AI Cartoon • Desert Frost</p>
            <h1>राजस्थान में बर्फ़ का जादुई महल</h1>
            <p className={styles.lede}>
              तपते रेगिस्तान के बीच दादी और उनके शरारती साथी बंदर ने
              मिलकर कल्पना से बना दिया ठंडा-ठंडा घर।
            </p>
            <div className={styles.controls}>
              <button
                type="button"
                onClick={() => highlightBeat((activeBeat + 1) % storyBeats.length)}
              >
                अगला दृश्य
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  setNoteIndex((prev) => (prev + 1) % magicNotes.length)
                }
              >
                जादुई रहस्य
              </button>
            </div>
          </div>

          <div className={styles.scene}>
            <div className={styles.sunset} />
            <div className={styles.dunes} />
            <div className={styles.icePalace}>
              <div className={styles.iceTower} />
              <div className={styles.iceDoorway}>
                <div className={styles.rangoli} />
              </div>
              <div className={styles.iceBeam} />
            </div>
            <div className={styles.grandma}>
              <div className={styles.grandmaFace}>
                <div className={styles.grandmaSmile} />
              </div>
              <div className={styles.grandmaShawl} />
              <div className={styles.grandmaBasket} />
            </div>
            <div className={styles.monkey}>
              <div className={styles.monkeyFace}>
                <div className={styles.monkeySmile} />
              </div>
              <div className={styles.monkeyTail} />
            </div>
          </div>
        </section>

        <section className={styles.storyBoard}>
          <header className={styles.storyHeader}>
            <h2>कथा के दृश्य</h2>
            <p>{magicNotes[noteIndex]}</p>
          </header>
          <ol className={styles.storyBeats}>
            {storyBeats.map((beat, index) => (
              <li
                key={`${beat.speaker}-${index}`}
                className={`${styles.beat} ${
                  index === activeBeat ? styles.activeBeat : ""
                } ${beat.vibe === "warm" ? styles.warmBeat : styles.coolBeat}`}
                onMouseEnter={() => highlightBeat(index)}
              >
                <span className={styles.beatSpeaker}>{beat.speaker}</span>
                <p className={styles.beatLine}>{beat.line}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className={styles.footer}>
          <p>
            कल्पनाओं की छाछ हमेशा ठंडी रहती है — दादी और बंदर के साथ इस घर की
            सैर करें, और गर्मियों को मुस्कुराकर हराएँ।
          </p>
        </footer>
      </main>
    </div>
  );
}
