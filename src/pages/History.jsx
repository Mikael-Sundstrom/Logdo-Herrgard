import AnimateFadePage from '../includes/_AnimateFadePage';
import lada from './../assets/images/lada.png'

const History = () => {
	return (
		<AnimateFadePage>
			<section>
				<h2>Historia</h2>
				<p><img src={lada} alt='img' className='history-image-one' />Lögdö bruk anlades 1685 av Erik Theet häradshövding i Medelpad och bosatt på Orsilgården i Timrå. Tillsammans med Petter Westberg, Isack Macay och Martin de Maisa ansökte han om tillstånd att uppföra en masugn och en stångjärnshammare i Lögdö.</p>
				<p>Malmen skeppades till Lögdö från Mellansverige bl a från Utö gruva i Stockholms södra skärgård. Att transportera malmen sjövägen var, även sträckan för långa, betydligt billigare än landtransporter med häst och vagn. När Lögdö bruk anlades var Ljustorpsån fortfarande segelbar och Lögdösjön sträckte sig nästan ända upp till herrgården.</p>
				<p>Samhället som växte upp kring bruket var till stor del självförsörjande, med ett betydande jordbruk och egen lanthandel. I centrum låg herrgården tillsammans med kyrkan, skolan, jordbruksbyggnader och tjänstemannabostäder. Utsprida längs bruksgatan, mot masugnen och hamrarna, låg brukstorp för hytte- hammar- och dagsverksarbetare.<br />År 1803 fanns vid Lögdö bruk 51 stycken bostäder byggda för brukets arbetare. Vid Lögdö fanns inga arbetslängor, som var mycket vanligt vid andra bruk. I stället bodde en stor del av de anställda i torp ute på brukets ägor.</p>
				<p>1749 var 199 personer mantalsskrivna på Lögdö och hundra år senare , 1850 hade Lögdö som ett av det största bruken i Medelpad en mantalsskriven befolkning på 295 personer. Betydligt fler avlönades dock av bruket eftersom den kringboende befolkningen, ofta bönder och torpare, gavs möjligheter till extra inkomster genom till exempel körslor, kolning och jordbruksarbete. 1865 fanns runt massugnen ett tjugotal byggnader tex, järnbodar, badstuga och bostäder för masmästare och hyttedrängar.<br />I slutet av 1800-talet minskade järnbruksrörelsen lönsamhet samtidigt som det blev alltmer ekonomiskt att använda skogen för sågverksindustrin. Bruksdriften upphörde i Sulå 1869, i Lagfors 1877 och 1878 blåstes det för sista gången l Lögdö masugn och därmed upphörde järnframställning i större skala.</p>
				<p>Sedan driften vid järnbruket upphörde 1878 har stora förändringar skett i miljön. Idag har skogen krupit närmare ruinerna och av slagghögar, kolhus och andra byggnader finns få rester kvar.</p>
			</section>
		</AnimateFadePage>
	);
}

export default History