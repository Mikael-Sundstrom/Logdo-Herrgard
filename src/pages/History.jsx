import AnimateFadePage from '../includes/_AnimateFadePage'
import lada from './../assets/images/history/512/Harbre-med-sommarloppis1.webp'
import kapell from './../assets/images/history/512/Logdo-kapell.webp'

const History = () => {
	return (
		<AnimateFadePage>
			<div id="history-page">
				<section className='section one container'>
					<div className="row">
						<div className="col s12">
							<h2>Historia</h2>
							<br />
						</div>
						<div className="col s12">
							<h4>Lögdö bruk</h4>
							<p><img src={lada} alt='img' />Lögdö bruk anlades 1685 av Erik Theet häradshövding i Medelpad och bosatt på Orsilgården i Timrå. Tillsammans med Petter Westberg, Isack Macay och Martin de Maisa ansökte han om tillstånd att uppföra en masugn och en stångjärnshammare i Lögdö.</p>
							<p>Malmen skeppades till Lögdö från Mellansverige bl a från Utö gruva i Stockholms södra skärgård. Att transportera malmen sjövägen var, även sträckan för långa, betydligt billigare än landtransporter med häst och vagn. När Lögdö bruk anlades var Ljustorpsån fortfarande segelbar och Lögdösjön sträckte sig nästan ända upp till herrgården.</p>
							<p>Samhället som växte upp kring bruket var till stor del självförsörjande, med ett betydande jordbruk och egen lanthandel. I centrum låg herrgården tillsammans med kyrkan, skolan, jordbruksbyggnader och tjänstemannabostäder. Utsprida längs bruksgatan, mot masugnen och hamrarna, låg brukstorp för hytte- hammar- och dagsverksarbetare.<br />År 1803 fanns vid Lögdö bruk 51 stycken bostäder byggda för brukets arbetare. Vid Lögdö fanns inga arbetslängor, som var mycket vanligt vid andra bruk. I stället bodde en stor del av de anställda i torp ute på brukets ägor.</p>
							<p>1749 var 199 personer mantalsskrivna på Lögdö och hundra år senare , 1850 hade Lögdö som ett av det största bruken i Medelpad en mantalsskriven befolkning på 295 personer. Betydligt fler avlönades dock av bruket eftersom den kringboende befolkningen, ofta bönder och torpare, gavs möjligheter till extra inkomster genom till exempel körslor, kolning och jordbruksarbete. 1865 fanns runt massugnen ett tjugotal byggnader tex, järnbodar, badstuga och bostäder för masmästare och hyttedrängar.<br />I slutet av 1800-talet minskade järnbruksrörelsen lönsamhet samtidigt som det blev alltmer ekonomiskt att använda skogen för sågverksindustrin. Bruksdriften upphörde i Sulå 1869, i Lagfors 1877 och 1878 blåstes det för sista gången l Lögdö masugn och därmed upphörde järnframställning i större skala.</p>
							<p>Sedan driften vid järnbruket upphörde 1878 har stora förändringar skett i miljön. Idag har skogen krupit närmare ruinerna och av slagghögar, kolhus och andra byggnader finns få rester kvar.</p>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<h4>Lögdö kapell</h4>
							<p><img src={kapell} alt='img' />Lögdö Kapell är en pärla belägen i vackra Lögdö. Kapellet är en plats av frid och stillhet som har betytt mycket för många människor genom åren.</p>
							<p>Byggnaden är enkel men vacker, med sin träpanel och vita färg. Den är omgiven av grönska och träd som ger en känsla av ro och avskildhet från vardagens stress och brus.</p>
							<p>Lögdö Kapell har en lång och rik historia, och har varit en central plats för många kyrkliga ceremonier och evenemang. Här har människor firat livets högtider och stöttat varandra i svåra stunder.</p>
							<p>Men kapellet är mer än bara en plats för religiösa ceremonier. Det är också en plats för gemenskap och samhörighet, där människor kan träffas och stödja varandra i sin tro och sina liv. Här finns det utrymme för reflektion, eftertanke och tystnad.</p>
							<p>Lögdö Kapell är precis som Lögdö bruk en viktig och vacker del av Timrå kommuns kulturarv. Det är en plats som vi bör bevara och värna om för framtida generationer att uppleva och uppskatta.</p>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default History