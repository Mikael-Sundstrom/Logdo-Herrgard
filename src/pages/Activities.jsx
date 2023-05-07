import AnimateFadePage from '../includes/_AnimateFadePage'
import fiske from './../assets/images/activities/512/fiske.webp'

const Activities = () => {
	return (
		<AnimateFadePage>
			<div id="activities-page">
				<section className='section one container'>
					<div className="row center-align">
						<div className="col s12">
							<h2>Aktiviteter i området</h2>
							<br />
							<img src={fiske} alt='img' className='history-image-one' style={{ width: '100%', maxWidth: '512px' }} />
							<br />
							<br />
						</div>
						<div className="col s12">
							<h3>Sommartid</h3>
						</div>
						<div className="col s12 m6 l4">
							<h4>Fiske</h4>
							<p>Det finns gott om möjligheter att utöva fiske vid vattdragen i både Ljustorpsån och Mjällån.</p>
							<a className='inline-link' target='_blank' rel="noreferrer" href='https://www.ifiske.se/fiske-ljustorpsan-och-mjallan.htm'>Köp fiskekort här..</a>
						</div>
						<div className="col s12 m6 l4">
							<h4>Kanot</h4>
							<p>Under sommarsäsongen erbjuder byggdegårdarna möjligheten att hyra kanoter och glida längs den slingrande Ljustorpsån, en njutning för både kropp och själ.</p>
							<a className='inline-link' target='_blank' rel="noreferrer" href='https://bygdegardarna.se/ljustorp/kanotuthyrning/'>Läs mer här..</a>
						</div>
						<div className="col s12 m6 l4">
							<h4>Vandra & cykla</h4>
							<p>Nära till naturområdet kring Indalsälvens delta där det finns härliga vandringsleder och havsbad.</p>
							<p>Vid Midlanda flygplats så finns ett område kring Y:et (Bengt Lindström, konstnär) där det finns sago stig, lekplats, café, glassbar och grillplatser.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Bada</h4>
							<p>Ni har möjlighet att avnjuta ett dopp i det glittrande vattnet i antingen Ljustorpsån eller Lögdösjön.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Promenad & motion</h4>
							<p>Elljusspår 2.5 km samt parallellt en snöröjd promenad- och joggingslinga.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Husbil & husvagn</h4>
							<p>Lögdö intresseförening som driver Lögdö Bruk har ställplatser för husbilar och husvagnar.</p>
						</div>
						<div className="col s12">
							<h3>Vintertid</h3>
						</div>
						<div className="col s12 m6 l4">
							<h4>Skidåkning</h4>
							<ul>
								<li>Spårbelysning finns mellan klockan 06.00-22.00. Tändning av belysningen sker med knapptryckning på baksidan av stolpen vid starten.</li>
								<li>Skidåkning med hund kopplad i lina är tillåten måndagar och onsdagar klockan 18.00-22.00.</li>
								<li>Spåret sköts av Timrå kommun.<br />Gymnasievägen 12, 861 41 Sörberge.</li>
							</ul>
						</div>
						<div className="col s12 m6 l4">
							<h4>Utförsåkning</h4>
							<p>Skönviksbacken <a className='inline-link' target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100076183329674">facebook..</a></p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Ljustorps idrottsplats</h4>
							<p>• Sköts av <a className='inline-link' target='_blank' rel="noreferrer" href='https://www.skidspar.se/vasternorrland/timra/lappstegestugan'>Ljustorps IF</a>.</p>
							<p>Besöksadress: 300 m in på väg mot Prästsvedjan, 861 93 Ljustorp.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Skoterled</h4>
							<p><a className='inline-link' target='_blank' rel="noreferrer" href="http://www.timrasnoskoterklubb.se/">Timrå snöskoterklubb..</a></p>
							<p><a className='inline-link' target='_blank' rel="noreferrer" href="https://www.timra.se/download/18.714dad16d46439ef93d86/1570135893689/Karta%20f%C3%B6rbudsomr%C3%A5de%20sn%C3%B6skotertrafik.pdf">Förbudskarta..</a></p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Söråkers idrottsplats</h4>
							<p>Sköts av <a className='inline-link' target='_blank' rel="noreferrer" href='https://www.skidspar.se/vasternorrland/timra/lappstegestugan'>Tynderö IK</a>.</p>
							<p>Besöksadress: Båtsmansvägen 5, 861 51 Söråker.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Bergeforsens idrottsplats</h4>
							<ul>
								<li>Spårsystem med elljusspår i olika slingor med längderna 800 meter, 1.5 km, 2.5 km, 3.5 km, 5 km samt 6.5 km. Alternativt skate och klassisk stil. Ett dagspår på 20 km klassisk stil från Bergeforsens IP till Ljustorp finns när Ljustorpsån frusit till.</li>
								<li>Spårbelysning finns mellan klockan 07.00-22.00. Tändning av belysningen sker med knapptryckning på elskåpet mellan huvudbyggnaden och isbanan.</li>
								<li>Skidåkning med hund kopplad i lina är tillåten tisdagar och torsdagar klockan 20.00-22.00.</li>
								<li>Här finns en konstsnöanläggning och tillgång till skicross, skidskytte, skidlekplats.</li>
								<li>Omklädningsrum finns tillgängliga dagtid vardagar samt kvällstid när <a className='inline-link' target='_blank' rel='noreferrer' href='https://www.bergeforsenssk.se/'>Bergeforsens SK</a> har träning.</li>
								<li>Sköts av Timrå kommun.</li>
							</ul>
							<p>Besöksadress: Rännarvägen 5, 861 38 Bergeforsen.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Lappstegestugan</h4>
							<p>• Sköts av <a className='inline-link' target='_blank' rel="noreferrer" href='https://www.skidspar.se/vasternorrland/timra/lappstegestugan'>Friluftsfrämjandet Hässjö</a>.</p>
						</div>
						<div className="col s12 m6 l4">
							<h4>Skönviksbergets Friluftscentrum</h4>
							<p>• Sköts av Timrå SOK  och Sundsvalls Biathlon</p>
						</div>
					</div>
				</section>
			</div >
		</AnimateFadePage >
	)
}

export default Activities