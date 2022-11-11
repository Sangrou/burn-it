console.log('i am alive')



let icecream = document.querySelector('.icecream')
let chocolate = document.querySelector('.chocolate')
let apple = document.querySelector('.apple')

icecream.outcome = 0
icecream.calories = 222
chocolate.outcome = 1
chocolate.calories = 546
apple.outcome = 2
apple.calories = 95

icecream.addEventListener('click', outcomeDisplay)
chocolate.addEventListener('click', outcomeDisplay)
apple.addEventListener('click', outcomeDisplay)

function outcomeDisplay(evt) {
    const outcomes = ['Mmmm, icecream. To spend the 222 calories you get with it you can chop wood for half an hour or do some light weightlifting for an hour. ',
    'You ate the whole 100 gram chocolate bar, congratulations. Sure, it was enjoyable. Now, to work against its 546 calories, you can try to jog for an hour or to play basketball vigorously for an hour and then do a half an hour stretching session.',
    'Some say that eating an apple a day keeps a doctor away. Not only that, it is also has just 95 calories in it on average. Burining off of this amount of energy can be achieved by bicycling for twenty minutes or by lifting heavy weights fot 10 minutes.']
    icecream.style.borderColor = 'initial'
    chocolate.style.borderColor = 'initial'
    apple.style.borderColor = 'initial'
    evt.currentTarget.style.borderColor = '#936CD6'      
    document.querySelector('.textDisplay').innerHTML = outcomes[evt.currentTarget.outcome]
}


