let player = {
  name: playerName,
  class: 'none',
  hp: 0,
  int: 0,
  strength: 0,
  magic: 0,
  skills: [],
  inventory: []
}
const hideButtons = arr => {
  arr.forEach(i => {$(`#btn${i}`).hide()})
}
const types = ['Fire','Water','Lightning']
const enemies = {
  babyDragon : (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.random() * types.length)];
    }else { type = typeSpec }
      return({
        type: type,
        name: `Baby ${type} Dragon`,
        hp: 10 + Math.floor(Math.random() * 4),
        damageMods: types.map(type => {
          if(type === 'Lightning'){
            return ({
              fireMod: 0,
              waterMod: 0,
              lightningMod: 1,
            })
          }if(type === 'Fire') {
            return ({
              fireMod: 1,
              waterMod: 0,
              lightningMod: 0,
            })
          }if (type === 'Water') {
            return ({
              fireMod: 0,
              waterMod: 1,
              lightningMod: 0,
            })
          }
        })[types.indexOf(type)],
        damages: types.map(type => {
          if(type === 'Lightning'){
            return ({
              normalDamage: 0,
              fireDamage: 0,
              waterDamage: 0,
              lightningDamage: 1,
            })
          }if(type === 'Fire') {
            return ({
              normalDamage: 0,
              fireDamage: 1,
              waterDamage: 0,
              lightningDamage: 0,
            })
          }if (type === 'Water') {
            return ({
              normalDamage: 0,
              fireDamage: 0,
              waterDamage: 1,
              lightningDamage: 0,
            })
          }
        })[types.indexOf(type)]
      })
  }
}
console.log(enemies.babyDragon());
const imgUrls = {
  hole: 'data:image/jpeg;base64,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',
  dragon: 'http://4.bp.blogspot.com/-I6TnYttADag/TedSzzpHjqI/AAAAAAAACU4/GddwN2qUnMM/s1600/Wary%2Bsmall%2Bdragon.jpg'
}

const set = {
  playerHP: (num => {
    $('#hp').html(`Hp: ${num.toString()}`)
  }),
  playerName: (name => {
    $('#playerName').html(`<strong>${name}</strong>`)
  }),
  strength: (num => {
    $('#strength').html(`Strength: ${num.toString()}`)
  }),
  int: (num => {
    $('#intelligence').html(`Intelligence: ${num.toString()}`)
  }),
  magic: (num => {
    $('#magic').html(`Magic: ${num.toString()}`)
  }),
  btn1: ((text, func) => {
    $('#btn1').html(text);
    $('#btn1').on('click', func);
  }),
  btn2: ((text, func) => {
    $('#btn2').html(text);
    $('#btn2').on('click', func);
  }),
  btn3: ((text, func) => {
    $('#btn3').html(text);
    $('#btn3').on('click', func);
  }),
  btn4: ((text, func) => {
    $('#btn4').html(text);
    $('#btn4').on('click', func);
  }),
  btnHolder : (text => {
    $('#btn-holder').html(text)
  }),
  encounterImg: (url => {
    $('#encounter-img').attr('src', url)
  }),
  textBox: ((text, append) => {
    append ? $('#text-box').append(text) : $('#text-box').html(text)
  }),
  enemyStats : (enemy => {
    $("#text-box").html(`<div id='enemy-name'>${enemy.name}</div>`);
    $('#enemyHp').html(`Hp:${enemy.hp}`);
    $('#enemyType').html(`Type:${enemy.type}`);
  }),
  btnHolder : (text => {
    $('#btn-holder').html(text);
  }),
}

const youDied = () => {

}

const updatePlayerStats = () => {
  set.playerName(player.name);
  set.playerHP(player.hp);
  set.strength(player.strength);
  set.int(player.int),
  set.magic(player.magic);
}

const setGameState = function(stateName) {
  switch (stateName) {
    case 'pickName': 
    {
      $('#hud').hide();
      $('#encounter-img').hide();
      $('#encounter-img-holder').append(`
          <div style='margin:auto'>
          <input type='text' id='name' placeholder='name'/>
          <button id='enter'>enter</button>
          </div>
        `);
      $('#enter').on('click', () => {
        player.name = $('#name').val();
        $('#encounter-img-holder').html("<img id='encounter-img'/>")
        $('#encounter-img').hide();
        setGameState('pickClass');
      });
      set.textBox("<div style='font-size: 40px; text-align:center'><strong> CHOOSE YOUR NAME</strong></div>");
    }
    break;
    case 'pickClass': 
    {
      $('#hud').hide();
      $('#encounter-img').hide();
        set.textBox("<div style='font-size: 40px; text-align:center'><strong> CHOOSE YOUR CLASS</strong></div>");
        $('#encounter-img-holder').append(`
        <button id='knight' style='height: 39%;width:110px;margin:auto'>
      	<img style='width:90%'
    	src='https://i.etsystatic.com/6248061/r/il/d0feed/1019970059/il_570xN.1019970059_71xz.jpg'
      />knight</button>
        <button id='engi'style='height: 39%;width:110px;margin:auto'> <img style='width:90%'src='
        https://i.etsystatic.com/6248061/r/il/d0feed/1019970059/il_570xN.1019970059_71xz.jpg
        '/> 
        Engineer
        </button>
        <button id='mage' style='height: 39%;width:110px;margin:auto'> <img style='width:90%'src='
        https://i.etsystatic.com/6248061/r/il/d0feed/1019970059/il_570xN.1019970059_71xz.jpg
        '/> 
        Mage
        </button>	
       `);
      $('#knight').on('click',() => {
        player.class='Knight';
        player.hp = 20;
        player.int = 2;
        player.magic = 0;
        player.strength = 5;
        player
        player.skills=[
          {
            name: 'Fire Sword',
            type: 'weapon',
            description: `A trusty shortsword enchanted with fire by a 
            lesser wizard. Great against water, ice, and spider type enemies!`,
            damage: 2,
            fireDamage: 1,
            iceDamage: 0,
            lightningDamage: 0
          },
          {
            name: 'Battle Axe',
            type: 'weapon',
            description: `Nothing special about this item. Just a giant
            axe`,
            damage: 4,
            fireDamage: 0,
            iceDamage: 0,
            lightningDamage: 0
          },
          {
            name: 'Insult',
            type: 'ability',
            description: `Yell a degrading put-down or contemptful taunt at the 
            enemy in hopes that they will give up and run away`,
            effect: () => 
            {
            //TODO add effect for ability
            },
          }
        ]
        setGameState('door');
      });
      $('#engi').on('click',() => {
        player.class='Engineer';
        player.hp = 20;
        player.int = 5;
        player.magic = 0;
        player.strength = 3;
        player.skills=[
          {
            name: 'Laser gun',
            type: 'Weapon',
            description: `Makeshift plasma rifle of your own creation. 
                          Try it on robot type and water type enemies`,
            damage: 0,
            fireDamage: 1,
            iceDamage: 0,
          },
          {
            name: 'Dagger',
            type: 'Weapon',
            description: ` dagger `,//TODO update dagger desc
            damage: 3,
            fireDamage: 1,
            iceDamage: 0,
          },
          {
            name: 'Outsmart',
            type: 'ability',
            description: `Use your cunning and trikery to bamboozle the
                          enemy and make a hefty escape`,
            effect: () => 
            {
            //TODO add effect for ability
            },
          }
        ]
        setGameState('door');
      });
      $('#mage').on('click',() => {
        player.class='Mage';
        player.hp=20;
        player.int = 2;
        player.magic = 5;
        player.strength = 0;
        player.skills=[
          {
            name: 'Fire ball',
            type: 'Weapon',
            description:`Shoot a great ball of fire from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`,
            damage: 0,
            fireDamage: 3,
            iceDamage: 0,
          },
          {
            name: 'Ice Beam',
            type: 'Weapon',
            description: `Shoot a great beam of ice from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`, //TODO update ice beam desc
            damage: 0,
            fireDamage: 0,
            iceDamage: 3,
          },
          {
            name: 'Heal',
            type: 'Weapon',
            description: `For your worship and dedications Maji has
                         granted you the ability to heal yourself.`,
            effect: () => 
            {
            //TODO add effect for ability
            },
          }
        ]
        setGameState('door');
      });
      }
      break;
    case 'door':
      {
        set.textBox(`You encounter a large door with ancient religious
          markings all over it`)
        $('#hud').show();
        $('#encounter-img-holder').html("<img id='encounter-img'/>");
        set.encounterImg('https://i.pinimg.com/originals/e6/4b/72/e64b72c72ad0e001bf70795951463d9d.jpg');
        $('#encounter-img').show();
        updatePlayerStats();
        set.btn1('Tinker with the door', () => {
          if(player.int > 4){ 
            set.textBox(`You find with some tinkering that with 
            application of heat into the large recess at the front
            the door will slide right open!`)
            set.btn4('blast your laser beam to open it up.', () => {
              set.textBox('')
              for(let i = 0;i < 3;i++){$(`#btn${i + 1}`).show()}
              setGameState('hole');
            });
            for(let i = 0;i < 3;i++){$(`#btn${i + 1}`).hide()}
          }else if(player.magic > 4){
            set.textBox('You can feel the power of Maji in the door.')
          }
          else{
            set.textBox('You find nothing of note.')
          }
        });
        set.btn2('Commune with the religious power', () => {
          if(player.magic > 4){
            set.textBox(`You speak "Mellon" and enter.`);
            setGameState('hole');
          }else{
            set.textBox(`The gods do not like you. Perhaps it
              is something you did in the past?`)
          }
        });
        set.btn3('Yell at the stupid door', () => {
          if(player.strength > 4) {
            set.textBox(`"GO AWAY STUPID DOOR!" you yell furiously and
            break it down`);
            setGameState('hole');
          }else {
            set.textBox(`The door does not open but you do feel a bit of
              relief from getting your anger out`)
          }
        });
        set.btn4('Go home and watch tv', () => {
          set.textBox('Well thats not very adventurous of you is it?')
        })
      }
      break;
      case 'hole':
      {
        setTimeout(() => {
          $('#btn3').hide();
          $('#btn4').hide();
          set.textBox('you come to a room with a large scary hole and a door.')
          set.encounterImg(imgUrls.hole);
          set.btn1('Jump into hole.', () => {
            setGameState('holeCont');
          });
          set.btn2('Go through door.', () => {
            setGameState('distractedMonster');
          });
        }, 1000);
      }
      break;
      case 'holeCont':

      break;
      case 'distractedMonster':
        const enterCombat = (enemy) => {
          $('#enemy-stats').show();
          const victory = () =>{
            set.textBox('You Won!')
          }
          const enemyTurn = () => {
            let enemyDamage = player.hp -= (
              (enemy.fireDamage - player.fireRes ) + 
              (enemy.waterDamage - player.waterRes) + 
              (enemy.lightningDamage - player.lightningRes) + 
              (enemy.normalDamage - player.normalRes)
              )
            if(enemyDamage < 0) {
              enemyDamage = 1;
            } 
            player.hp -= (
              (enemy.fireDamage - player.fireRes ) + 
              (enemy.waterDamage - player.waterRes) + 
              (enemy.lightningDamage - player.lightningRes) + 
              (enemy.normalDamage - player.normalRes)
              )
          }
          const playerTurn = () => {

          }
          if(playerHp > 0){
          


          (enemyHp > 0) ? enemyTurn() : victory()
          }else{ youDied(); } 
        }
        let enemy = enemies.babyDragon();
        set.encounterImg(imgUrls.dragon);
        set.textBox('Through the door you encounter a monster');   
        set.enemyStats(enemy);
        set.btn1('Fight!', () => {
          enterCombat(enemy);
        });
        set.btn2('try to sneak by', () => {

        });
      break;
  }
}
$(document).ready( () => {
  $('#enemy-stats').hide()
  setGameState('hole');
    player.name='name'
    player.class='Engineer';
        player.hp = 20;
        player.int = 5;
        player.magic = 0;
        player.strength = 3;
    updatePlayerStats();

});

