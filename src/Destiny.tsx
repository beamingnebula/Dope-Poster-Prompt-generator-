import { ArrowLeft, Copy, Dices, RefreshCw, Sparkles, Trash2 } from 'lucide-react'
import { useState } from 'react'

const styles = [
  ['Frutiger-Aero', 'icy silver-blue halftone screen, pearlescent paper and clean chrome reflections', 'glass capsule shapes, soft cyan glow and inflated techno lettering'],
  ['Riso / Grain Rave', 'raw photocopy duotone, heavy risograph grain and slight two-colour misregistration', 'rough hand-cut type, circular stamp marks and a torn-paper frame'],
  ['Brutalist Signal', 'matte black ink, bone-white stock and fluorescent lime registration marks', 'monumental condensed type, utility labels and a severe broken grid'],
  ['Xerox Romance', 'blown-out black-and-cream photocopy texture, tape marks and visible paper fibres', 'an intimate found-image collage, marker strokes and cropped editorial copy'],
  ['Chrome Ritual', 'smoked-glass shadows, polished aluminum surfaces and controlled foil highlights', 'a single surreal object, laser-etched coordinates and architectural spacing'],
] as const
const formats = ['Surprise me', 'Rave flyer', 'Single poster', 'Underground club poster', 'Conceptual art print', 'Brand campaign poster', 'Zine cover']
const ratios = ['Surprise me', '1:1', '4:5', '3:4', '2:3', '9:16', '16:9', '3:2', '4:3', '2:1']
const fallback = ['a midnight radio station', 'a coastal gear label', 'an all-night noodle bar', 'a moth collector’s field archive', 'a warehouse dance crew', 'a decommissioned lighthouse']
const pick = <T,>(values: readonly T[]) => values[Math.floor(Math.random() * values.length)]
type Props = { onBack: () => void }

export default function Destiny({ onBack }: Props) {
  const [subject, setSubject] = useState(''); const [style, setStyle] = useState(0); const [format, setFormat] = useState(formats[0]); const [ratio, setRatio] = useState(ratios[0]); const [copy, setCopy] = useState(['', '', '', '', '', '']); const [prompt, setPrompt] = useState(''); const [history, setHistory] = useState<string[]>([]); const [notice, setNotice] = useState('')
  const flash = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 1600) }
  const makePrompt = (random = false, suppliedSubject?: string, suppliedCopy?: string[]) => {
    const choice = random ? Math.floor(Math.random() * styles.length) : style; const selected = styles[choice]; const actualSubject = suppliedSubject || subject.trim() || pick(fallback); const actualFormat = random || format === 'Surprise me' ? pick(formats.slice(1)) : format; const actualRatio = ratio === 'Surprise me' ? pick(ratios.slice(1)) : ratio; const words = suppliedCopy || copy
    
    // Restore and merge structural headline features
    const hasText = words.some(w => w.trim() !== '');
    const headline = words[0]?.trim();
    const subtexts = words.slice(1).map((value, index) => value.trim() ? `Text ${index + 2}: “${value.trim()}”` : '').filter(Boolean).join('; ');
    const typeInstruction = hasText 
      ? (headline 
          ? `Typography: “${headline}” is the structural headline, oversized, cropped and physically integrated with the subject. Only include the following provided supporting microcopy: ${subtexts || 'none'}. Do not generate any other text, lettering, or microcopy.`
          : `Typography is structural and physically integrated with the subject. Only include the following provided text: ${words.map((value, index) => value.trim() ? `Text ${index + 1}: “${value.trim()}”` : '').filter(Boolean).join('; ')}. Do not generate any other text, lettering, or microcopy.`)
      : `Do not add any text, typography, labels, letters, words, or microcopy in the image; the layout must remain entirely clean and clear of any textual elements.`;

    const result = `${actualFormat} in a ${actualRatio} aspect ratio — ${selected[0]}. The primary subject is ${actualSubject}: make it unmistakably visible, central to the visual narrative, physically believable and clearly described in the image—not merely symbolic, incidental, abstracted away or hidden. Use ${selected[1]}. Build ${selected[2]}. ${typeInstruction} Use only restrained microcopy for any empty fields. Composition has a single decisive focal point, controlled negative space and an intentional grid tailored to ${actualRatio}. Use a limited palette with one acidic accent, tactile print imperfections and deliberate material detail. Quietly intelligent underground culture, premium graphic design, no generic AI gloss, no random clutter.`
    
    setSubject(actualSubject);
    setStyle(choice); setFormat(actualFormat); setRatio(actualRatio); setPrompt(result); setHistory(old => [result, ...old.filter(x => x !== result)].slice(0, 6)); flash(random ? 'Fresh plate randomized' : 'New plate generated')
  }
  const randomize = () => { const nextSubject = pick(fallback); const nextCopy = ['AFTER SIGNAL', 'WE ONLY MOVE FORWARD', '04.05 / 00:00', 'PIER 12, BAY M', 'GATE 03', 'DESTINY PRESS']; setSubject(nextSubject); setCopy(nextCopy); makePrompt(true, nextSubject, nextCopy) }
  const clear = () => { setSubject(''); setCopy(['', '', '', '', '', '']); setPrompt(''); flash('Plate cleared') }
  
  return <div className="destiny-tool"><header className="destiny-header"><button className="destiny-nav" onClick={onBack}><ArrowLeft size={16}/> PROMPT STUDIO</button><div><b>DESTINY<span>.</span></b><small>PROMPT PRESS</small></div><em>SESSION / {String(history.length).padStart(3, '0')}</em></header><main className="destiny-main"><section className="destiny-controls"><p>BUILD A PLATE</p><small>Fill in what you know. The press only fills in the unassigned stations.</small><label>SUBJECT <i>— what this is for</i><input value={subject} onChange={e => setSubject(e.target.value)} placeholder="e.g. a woman in bikini arched back yoga" /></label><label>STYLE<select value={style} onChange={e => setStyle(Number(e.target.value))}><option value={-1}>Surprise me</option>{styles.map((item, index) => <option value={index} key={item[0]}>{item[0]}</option>)}</select></label><label>FORMAT<select value={format} onChange={e => setFormat(e.target.value)}>{formats.map(item => <option key={item}>{item}</option>)}</select></label><label>ASPECT RATIO<select value={ratio} onChange={e => setRatio(e.target.value)}>{ratios.map(item => <option key={item}>{item}</option>)}</select></label><div className="destiny-type-title">TYPE ON THE PLATE <i>(OPTIONAL)</i></div><div className="destiny-type-grid">{copy.map((value, index) => <label key={index}>TEXT {index + 1} <i>— {['headline', 'tagline / subtitle', 'date & time', 'location / venue', 'corner tag', 'footer / credit'][index]}</i><input value={value} onChange={e => setCopy(old => old.map((item, n) => n === index ? e.target.value : item))} placeholder={['the big word', 'e.g. we only move forward', 'e.g. 04.05 / 00:00', 'e.g. Pier 12', 'e.g. gate 03', 'e.g. design by studio'][index]} /></label>)}</div><div className="destiny-actions"><button className="destiny-primary" onClick={() => makePrompt()}><Sparkles size={16}/> RUN THE PRESS</button><button onClick={randomize}><Dices size={16}/> RANDOMIZE</button><button className="destiny-clear" onClick={clear}><Trash2 size={15}/> CLEAR</button></div></section><section className="destiny-stage"><div className={`destiny-poster ${prompt ? '' : 'empty'}`}><i/><i/><i/><i/>{prompt ? <><div className="destiny-meta">DESTINY // {styles[Math.max(style, 0)][0].toUpperCase()} <span>PLATE / {String(history.length).padStart(3, '0')}</span></div><b>{format.toUpperCase()} / {ratio}</b><pre>{prompt}</pre><footer>ACCENT — ACID LIME <span>SUBJECT — {subject || 'SURPRISE'}</span></footer></> : <p>Nothing on the plate yet.<br/>Set a subject and run the press.</p>}</div>{prompt && <div className="destiny-output-actions"><button className="destiny-primary" onClick={() => { navigator.clipboard.writeText(prompt); flash('Prompt copied') }}><Copy size={16}/> COPY PROMPT</button><button onClick={() => makePrompt()}><RefreshCw size={16}/> PULL AGAIN</button></div>}{history.length > 0 && <div className="destiny-history"><span>RECENT PULLS</span>{history.map((item, index) => <button key={index} onClick={() => setPrompt(item)}>{item}</button>)}</div>}</section></main>{notice && <div className="lime-toast show">{notice}</div>}</div>
}
