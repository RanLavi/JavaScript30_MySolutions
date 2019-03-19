const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand'); // For removing the transition in case the seconds complete a circle, thus causing a glitch

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60 * 360) + 90; // 90 degrees is the starting offset, so we fix it back to match the degrees
	if(secondsDegrees === 90) // Seconds completed a circle, remove transition
    		allHands.forEach(hand => hand.style.transition = 'none')
	else // Resets the inline style by removing it so the element can revert back to the stylesheet 
    		allHands.forEach(hand => hand.style.transition = '')
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60 * 360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	const hours = now.getHours();
	const hoursDegrees = (hours / 12 * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);