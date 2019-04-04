let player = {
  name: playerName,
  class: 'none',
  hp: 0,
  intelligence: 0,
  strength: 0,
  magic: 0,
  skills: [],
  inventory: [],
  potions: [],
  cryos: 0,
  fireRes: 0,
  waterRes: 0,
  lightningRes: 0
}
const hideButtons = arr => {
  arr.forEach(i => {$(`#btn${i}`).hide()})
}
const showButtons = arr => {
  arr.forEach(i => {$(`#btn${i}`).show()})
}
const types = ['Fire','Water','Lightning']
const potions = {
  health: {
    name: 'Health potion',
    affect: () => {
      let hpToAdd = 3 + Math.floor(Math.random() * 3);
      player.hp += hpToAdd;
      $('#btn-holder').append(`
        <div id='potion-message'>
          the potion heals you for ${hpToAdd} hp!
        </div>
      `)
    }
  },
}
const boss = (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.random() * types.length)];
    }else { type = typeSpec; }
      return({
        url: 'http://game-insider.com/wp-content/uploads/2011/10/dark_souls_4.jpg',
        type: type,
        name: `Scary Boss Monster`,
        hp: 10 + Math.floor(Math.random() * 4),
        damageMods: types.map(type => {
          if(type === 'Lightning'){
            return ({
              fireMod: 2,
              waterMod: 2,
              lightningMod: 3,
            })
          }if(type === 'Fire') {
            return ({
              fireMod: 3,
              waterMod: 2,
              lightningMod: 2,
            })
          }if (type === 'Water') {
            return ({
              fireMod: 2,
              waterMod: 3,
              lightningMod: 2,
            })
          }
        })[types.indexOf(type)],
        damages: types.map(type => {
          if(type === 'Lightning'){
            return ({
              normalDamage: 2,
              fireDamage: 2,
              waterDamage: 2,
              lightningDamage: 4,
            })
          }if(type === 'Fire') {
            return ({
              normalDamage: 2,
              fireDamage: 4,
              waterDamage: 2,
              lightningDamage: 2,
            })
          }if (type === 'Water') {
            return ({
              normalDamage: 2,
              fireDamage: 2,
              waterDamage: 4,
              lightningDamage: 2,
            })
          }
        })[types.indexOf(type)]
      })
  }
const enemies = {
  babyDragon : (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.random() * types.length)];
    }else { type = typeSpec; }
      return({
        url: 'http://4.bp.blogspot.com/-I6TnYttADag/TedSzzpHjqI/AAAAAAAACU4/GddwN2qUnMM/s1600/Wary%2Bsmall%2Bdragon.jpg',
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
  },
    troll : (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.random() * types.length)];
    }else { type = typeSpec; }
      return({
        url: 'data:image/jpeg;base64,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',
        type: type,
        name: `${type} Troll`,
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
    },
    rockGolem : (typeSpec) => {
    let type;
    if(!typeSpec) {
        type = types[Math.floor(Math.random() * types.length)];
    }else { type = typeSpec; }
      return({
        url: 'https://vignette.wikia.nocookie.net/yorukuni/images/4/4a/Rock_Golem.jpg/revision/latest?cb=20170829162856',
        type: type,
        name: `${type} Rock Golem`,
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
const imgUrls = {
  hole: 'data:image/jpeg;base64,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',
  chest: 'https://comps.canstockphoto.com/cartoon-treasure-chest-illustration_csp17867527.jpg',
  potion: 'https://thumbs.dreamstime.com/z/cartoon-chemical-potion-hand-drawn-illustration-retro-style-vector-available-37015738.jpg',
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
  intelligence: (num => {
    $('#intelligence').html(`Intelligence: ${num.toString()}`)
  }),
  magic: (num => {
    $('#magic').html(`Magic: ${num.toString()}`)
  }),
  cryos: (num => {
    $('#cryos').html(`Cryos: ${num.toString()}`)
  }),
  btn1: ((text, func) => {
    $('#btn1').off();
    $('#btn1').html(text);
    $('#btn1').on('click', func);
  }),
  btn2: ((text, func) => {
    $('#btn2').off();
    $('#btn2').html(text);
    $('#btn2').on('click', func);
  }),
  btn3: ((text, func) => {
    $('#btn3').off();
    $('#btn3').html(text);
    $('#btn3').on('click', func);
  }),
  btn4: ((text, func) => {
    $('#btn4').off();
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
    console.log(enemy)
    $("#text-box").html(`<div id='enemy-name'>${enemy.name}</div>`);
    $('#enemy-hp').html(`Hp:${enemy.hp}`);
    $('#enemy-type').html(`Type:${enemy.type}`);
  }),
  btnHolder : (text => {
    $('#btn-holder').html(text);
  }),
}
const youDied = () => {
  $('#enemy-turn-message').remove();
  $('#enemy-stats').hide();
  showButtons([1,2,3,4]);
  set.textBox(`<h4 style={color:red;}>YOU DIED</h4>`);
  hideButtons([2,3,4]);
  showButtons([1]);
  set.btn1('Play Again?', () => {
    setGameState('pickName');
  })
}

const updatePlayerStats = () => {
  set.playerName(player.name);
  set.playerHP(player.hp);
  set.strength(player.strength);
  set.intelligence(player.intelligence),
  set.magic(player.magic);
  set.cryos(player.cryos);
}

const enterCombat = (enemy, nextState) => {
    let canUseAbility = player.skills.map(skill => true);
    console.log(canUseAbility);
    set.encounterImg(enemy.url);
    set.enemyStats(enemy);
    $('#enemy-stats').show();
    const victory = () => {
      set.textBox('You Won!')
      showButtons([1]);
      hideButtons([2,3,4]);
      set.btn1('yay!', () => {
        $('#enemy-stats').hide();
        setGameState(nextState);
      });
    };
    const enemyTurn = () => {
      if(enemy.hp <= 0){
        $('#enemy-turn-message').hide();
        $('#player-turn-message').hide();
        victory();
        return;
      }
      let damage = (
        (enemy.damages.fireDamage - player.fireRes ) + 
        (enemy.damages.waterDamage - player.waterRes) + 
        (enemy.damages.lightningDamage - player.lightningRes) + 
        (enemy.damages.normalDamage)
        )
      if(damage < 0) {
        damage = 1;
      } 
      player.hp -= damage
      setTimeout( () => {
        $('#player-turn-message').remove();
        $('#btn-holder').append(`
          <div id='enemy-turn-message'>
            The ${enemy.name} hit you for ${damage} damage!
          </div>
        `);
        $('#enemy-stats').show();
        updatePlayerStats();
        setTimeout(() => {
          if(player.hp > 0){playerTurn();}else{youDied();}
        }, 1000)
      }, 1000);
    }
    const playerTurn = () => {
      $('#enemy-turn-message').remove();
      hideButtons([4]);
      showButtons([1,2, 3]);
      set.btn1('Use weapon', () => {
        $(`.weapon-holder`).remove();
        $('.ability-holder').remove();
        hideButtons([1,2,3,4]);
        player.skills.forEach( (skill, i) => {
          let damage = (skill.fireDamage + skill.waterDamage + 
                              skill.lightningDamage + skill.normalDamage)
          if(skill.type === 'Weapon'){
            $('#btn-holder').append(`
                <div id='weapon${i}' class='weapon-holder'>
                  <div class='weapon'>
                  <img class='weapon-img' src='https://images.cdn2.stockunlimited.net/preview1300/pixel-art-axe_1959556.jpg'>
                  <div class='weapon-stats'>
                    <div class='weapon-name'><strong>${skill.name}</strong>
                    </div>
                    <div class='weapon-damage'>
                    damage: ${damage}
                    </div>
                  </div>
               </div>
             </div>
            `);

            $(`#weapon${i}`).on('click', () => {
              enemy.hp -= damage;
              set.enemyStats(enemy);
              $(`.weapon-holder`).remove();
              $('.ability-holder').remove();
              $('#btn-holder').append(
                `
                <div id='player-turn-message'>
                  You hit the ${enemy.name} for ${damage} damage!
                </div>
                `
                );
              enemyTurn();
            });
          }
        })
      });
      set.btn2('Use ability', () => {
          $(`.weapon-holder`).remove();
          $('.ability-holder').remove();
          hideButtons([1,2,3,4]);
          player.skills.forEach( (skill, i) => {
            if(skill.type === 'Ability'){
              let desc = skill.description;
              $('#btn-holder').append(`
                  <div id='ability${i}' class='ability-holder'>
                    <div class='ability'>
                    <img class='ability-img' src='https://images.cdn2.stockunlimited.net/preview1300/pixel-art-axe_1959556.jpg'>
                    <div class='ability-stats'>
                      <div class='weapon-name'><strong>${skill.name}</strong>
                      </div>
                      <div class='ability-affect'${desc}</div>
                    </div>
                 </div>
               </div>
              `);
              $(`#ability${i}`).on('click', () => {
                if(canUseAbility[i]) {
                  $('.ability-holder').remove();
                  let affect = skill.affect();
                  set.enemyStats(enemy);
                  console.log(affect);
                  setTimeout(() => {
                    if(!affect){
                      enemyTurn();
                      $('#player-turn-message').remove();
                    }else {
                      setGameState(nextState);
                      $('#player-turn-message').remove();
                    }
                  },1000);
                  canUseAbility[i] = false;
                }else{
                  $('.ability-holder').remove();
                  $('.weapon-holder').remove();
                  hideButtons([1,2,3,4]);
                  $('#btn-holder').append(`
                    <div class='ability-message'>
                      You can only use each ability once 
                      per battle.
                    </div>
                    `);
                  setTimeout(() => {
                  $('.ability-message').remove();
                    showButtons([1,2,3]);
                  }, 1000);
                }
              });
            }
          })
      });
      set.btn3('Use potion', () => {
        $('.potion-message').remove();
        if(player.potions.length > 0) {
          player.potions.forEach((potion, i) => {
            hideButtons([1,2,3,4])
            $('#btn-holder').append(`
                <div id='potion${i}' class='potion-holder'>
                  <div class='potion'>
                  <img class='potion-img' src='${imgUrls.potion}'>
                  <div class='ability-stats'>
                    <div class='potion-name'><strong>${potion.name}</strong>
                    </div>
                  </div>
               </div>
             </div>
            `);
            $(`#potion${i}`).on('click', () => {
              $('.potion-holder').remove();
              potion.affect();
              player.potions.splice(i,1);
              setTimeout(() => {
                $('#potion-message').remove();
                enemyTurn();
              }, 1000)
            });
          });
        }else {
          hideButtons([1,2,3,4]);
          $('#btn-holder').append(`
            <div class='potion-message'>
              You dont have any potions
            </div>
            `);
          setTimeout(() => {
          $('.potion-message').remove();
            showButtons([1,2,3]);
          }, 1000);
        }
      });
    }
    if(player.hp > 0){playerTurn();}else{youDied();}
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
        <div id='enemy-stats'>
        <div id='enemy-hp'>
         Hp: 12 
        </div>
        <div id='enemy-ype'>
          Type: Fire
        </div>
      </div>
       `);
        $('#enemy-stats').hide();
        player.fireRes = 0;
        player.waterRes = 0;
        player.lightningRes = 0;
      $('#knight').on('click',() => {
        player.class='Knight';
        player.hp = 20;
        player.intelligence = 0;
        player.magic = 2;
        player.strength = 5;
        player.skills=[
          {
            name: 'Fire Sword',
            type: 'Weapon',
            description: `A trusty shortsword enchanted with fire by a 
            lesser wizard. Great against water, ice, and spider type enemies!`,
            normalDamage: 2,
            fireDamage: 1,
            waterDamage: 0,
            lightningDamage: 0
          },
          {
            name: 'Battle Axe',
            type: 'Weapon',
            description: `Nothing special about this item. Just a giant
            axe`,
            normalDamage: 4,
            fireDamage: 0,
            waterDamage: 0,
            lightningDamage: 0
          },
          {
            name: 'Insult',
            type: 'Ability',
            description: `Yell a degrading put-down or contemptful taunt at the 
            enemy in hopes that they will give up and run away`,
            affect: nextState => 
            {
              let chance = Math.random() * 9; 
              if(player.strength > chance){
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    You succesfully annoy the enemy!
                  </div>
                  `
                  );
                $('#enemy-stats').hide();
                setTimeout(() => {
                  setGameState(nextState);
                }, 1000);
              }else{
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    you fail to annoy the enemy.
                  </div>
                  `
                  );
                setTimeout(() => {},1000);
              }
            },
          }
        ]
        setGameState('door');
      });
      $('#engi').on('click',() => {
        player.class='Engineer';
        player.hp = 20;
        player.intelligence = 5;
        player.magic = 1;
        player.strength = 3;
        player.skills=[
          {
            name: 'Laser gun',
            type: 'Weapon',
            description: `Makeshift plasma rifle of your own creation. 
                          Try it on robot type and water type enemies`,
            normalDamage: 0,
            fireDamage: 1,
            waterDamage: 0,
            lightningDamage: 3,
          },
          {
            name: 'Dagger',
            type: 'Weapon',
            description: ` dagger `,//TODO update dagger desc
            normalDamage: 3,
            fireDamage: 1,
            waterDamage: 0,
           lightningDamage: 0,
          },
          {
            name: 'Outsmart',
            type: 'Ability',
            description: `Use your cunning and trikery to bamboozle the
                          enemy and make a hefty escape`,
            affect: () => 
            {
              let chance = Math.random() * 8; 
              console.log(chance, player.intelligence)
              if(player.intelligence > chance) {
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    You succesfully outsmart the enemy!
                  </div>
                  `
                  );
                $('#enemy-stats').hide();
                setTimeout(() => {
                  $('#player-turn-message').remove();
                }, 1000);
                return true;
              }else {
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    you fail to outsmart the enemy.
                  </div>
                  `
                  );
                setTimeout(() => {
                },1000);
                return false;
              }
            },
          }
        ]
        setGameState('door');
      });
      $('#mage').on('click',() => {
        player.class='Mage';
        player.hp=20;
        player.intelligence = 2;
        player.magic = 5;
        player.strength = 0;
        player.skills=[
          {
            name: 'Fire ball',
            type: 'Weapon',
            description:`Shoot a great ball of fire from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`,
            normalDamage: 0,
            fireDamage: 3,
            waterDamage: 0,
            lightningDamage: 0,
          },
          {
            name: 'Ice Beam',
            type: 'Weapon',
            description: `Shoot a great beam of ice from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`, //TODO update ice beam desc
            normalDamage: 0,
            fireDamage: 0,
            waterDamage: 3,
            lightningDamage: 0,
          },
          {
            name: 'Heal',
            type: 'Ability',
            description: `Heal for ${player.magic} hp`,
            affect: () => 
            {
              $(`.weapon-holder`).remove();
              $('.ability-holder').remove();
              player.hp += player.magic;
              $('#btn-holder').append(
              `
              <div id='player-turn-message'>
                You healed for ${player.magic} hp!
              </div>
              `
              );
              setTimeout(() => {},1000);
            },
          }
        ]
        setGameState('door');
      });
      }
      break;
    case 'door':
      {
        showButtons([1,2,3,4]);
        set.textBox(`You encounter a large door with ancient religious
          markings all over it`)
        $('#hud').show();
        $('#encounter-img-holder').html(`
          <img id='encounter-img'/> 
          <div id='enemy-stats'>
          <div id='enemy-hp'>
           Hp: 12 
          </div>
          <div id='enemy-ype'>
            Type: Fire
          </div>
        </div>
        `);
        $('#enemy-stats').hide();
        set.encounterImg('https://i.pinimg.com/originals/e6/4b/72/e64b72c72ad0e001bf70795951463d9d.jpg');
        $('#encounter-img').show();
        updatePlayerStats();
        set.btn1('Tinker with the door', () => {
          if(player.intelligence > 4){ 
            hideButtons([2,3,4]);
            set.textBox(`You find with some tinkering that with 
            application of heat into the large recess at the front
            the door will slide right open!`)
            set.btn1('blast your laser beam to open it up.', () => {
              set.textBox('')
              showButtons([2,3,4]);
              setGameState('hole');
            });
          }else if(player.magic > 4){
            set.textBox('You can feel the power of Maji in the door.')
          }
          else{
            set.textBox('You find nothing of note.')
          }
        });
        set.btn2('Commune with the religious power', () => {
          if(player.magic > 4){
            hideButtons([2,3,4]);
            set.textBox(`The door grants you passage!`)
            set.btn1('open', () => {
              showButtons([2,3,4]);
              setGameState('hole');
            });
          }else{
            set.textBox(`The gods do not like you. Perhaps it
              is something you did in the past?`)
          }
        });
        set.btn3('Yell at the stupid door', () => {
          if(player.strength > 4) {
            hideButtons([2,3,4]);
            set.textBox(`"GO AWAY STUPID DOOR!" you yell furiously and
            break it down`);
            set.btn1('okay' ,() => {setGameState('hole')});
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
          showButtons([1,2])
          hideButtons([3,4]);
          set.textBox('you come to a room with a large scary hole and a door.')
          set.encounterImg(imgUrls.hole);
          set.btn1('Jump into hole.', () => {
            setGameState('holeCont');
          });
          set.btn2('Go through door.', () => {
            setGameState('distractedMonster');
          });
      }
      break;
      case 'holeCont':
        set.encounterImg('');
        set.textBox(`It is super dark and scary but you find
                    a shiny rock on the ground. (cryos +15)`)
        player.cryos += 15;
        updatePlayerStats();
        hideButtons([2,3,4]);
        set.btn1('Run to the exit super quick!');
      break;
      case 'distractedMonster': 
      {
        showButtons([1,2]);
        hideButtons([3,4]);
        set.textBox('Through the door you encounter a monster');   
        set.btn1('Fight!', () => {
        let keys = Object.keys(enemies)
        let enemy = enemies[keys[Math.floor(Math.random() * keys.length)]]();
        enterCombat(enemy, 'chest');
        });
        let probability = 
          (player.class === 'Engineer')
          ? '70%'
          : (player.class === 'Mage')
          ? '50%'
          : (player.class === 'Knight')
          ? '30%'
          : 'something went wrong'; 
        set.btn2(`try to sneak by (${probability})`, () => {

        });
      }
      break;
      case 'chest':
      {
        set.encounterImg(imgUrls.chest);
        set.textBox('In the next room you find a chest.')
        showButtons([1]);
        hideButtons([3,4]);
        set.btn1('open it', () => {
          switch(Math.floor(Math.random() * 3)) {
            case 0: {
              hideButtons([2]);
              set.textBox('It was a trap! The chest blows up in your face and you die!');
              set.btn1('start over', () => {
                setGameState('pickName');
              });
            }
            break;
            case 1: {
              hideButtons([2]);
              set.textBox('In the chest you find 15 cryos and a fire resistance token (fire resistance +1)');
              player.fireRes++;
              player.cryos += 15;
              set.btn1('ok', () => {
                setGameState('kitty');
              });
            }
            break;
            case 2: {
              hideButtons([2]);
              set.textBox('In the chest you find a strange amulet, perhaps it will be useful in the future?');
              player.inventory.push({
                name: 'Strange Amulet',
                imgUrl: '',
              })
              set.btn1('ok', () => {
                setGameState('kitty');
              });
            }
            break;
            default: {
              set.textBox('something went wrong');
            }
            break;
          }
        })
      }  
      break;
      case 'kitty': {
        set.encounterImg('https://i.pinimg.com/originals/22/de/56/22de560882988177d06c1e5f3aa4c457.jpg');
        set.textBox('you find a kitty ally in the next room!')
        hideButtons([2,3,4]);
        showButtons([1]);
        set.btn1('Greet your new friend!', () => {
          switch(player.class) {
            case 'Engineer':
            case 'Knight': {
              set.textBox(`Your new kitty friend gives you the ability to heal yourself!
                            this ability is governed by your magic stat.
                `);
              player.skills.push({
                name: 'Heal',
                type: 'Ability',
                description: `Heal for ${player.magic} hp`,
                affect: () => 
                {
                  $(`.weapon-holder`).remove();
                  $('.ability-holder').remove();
                  player.hp += player.magic;
                  $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    You healed for ${player.magic} hp!
                  </div>
                  `
                  );
                  setTimeout(() => {},1000);
                },
              })
              set.btn1('Wow, thanks so much!', () => {
                set.textBox(`Wait ${player.name}, take this health potion too!`)
                player.potions.push({
                  //TODO add health potion
                })
                set.btn1('Ok bye now', () => {
                  setGameState('bossFight');
                });
              });
            }
            break;
            case 'Mage': {
              set.textBox(`Your new kitty friend gives you the ability to outsmart your enemy to escape a battle!
                            this ability is governed by your intelligence stat.
                `);
              player.skills.push({
                name: 'Outsmart',
                type: 'Ability',
                description: `Use your cunning and trikery to bamboozle the
                              enemy and make a hefty escape`,
                affect: nextState => 
                {
                  let chance = Math.random() * 9; 
                  if(player.intelligence > chance){
                    $(`.weapon-holder`).remove();
                    $('.ability-holder').remove();
                    $('#btn-holder').append(
                      `
                      <div id='player-turn-message'>
                        You succesfully outsmart the enemy!
                      </div>
                      `
                      );
                    $('#enemy-stats').hide();
                    setTimeout(() => {
                      setGameState(nextState);
                      $('#player-turn-message').remove();
                    }, 1000);
                  }else{
                    $(`.weapon-holder`).remove();
                    $('.ability-holder').remove();
                    $('#btn-holder').append(
                      `
                      <div id='player-turn-message'>
                        you fail to outsmart the enemy.
                      </div>
                      `
                      );
                    setTimeout(() => {},1000);
                  }
                },
              });
              set.btn1('Wow, thanks so much!', () => {
                set.textBox(`Wait ${player.name}, take these health potions too!`)
                player.potions.push(potions.health);
                player.potions.push(potions.health);
                set.btn1('Ok bye now', () => {
                  set.encounterImg(imgUrls.boss);
                  setGameState('bossFight');
                });
              });
            }
          }
        })
      }
      break;
      case 'priest': {

      }
      break;
      case 'bossFight':
      {
        hideButtons([3,4]);
        showButtons([1,2]);
        set.textBox('You encounter the final boss!');
        set.btn1('Im ready', () => {
          enterCombat(boss(), 'youWin');
        });
        set.btn2('Im scared', () => {
          $('#hud').hide();
          set.textBox('how pitiful');
          setTimeout(() => {
            setGameState('pickName');
          }, 3000);
        });
      }
      break;
      case 'youWin':
      {
        $('#hud').hide();
        $('#enemy-stats').hide();
        set.encounterImg('https://image.shutterstock.com/image-vector/you-win-glitch-text-anaglyph-450w-732073129.jpg');
      }
      break;
  }
}
$(document).ready( function(){
  $('#enemy-stats').hide()
    setGameState('pickName');
    player.name='name';
    player.class='Engineer';
        player.hp = 20;
        player.intelligence = 5;
        player.magic = 0;
        player.strength = 3;
        player.fireRes = 0;
        player.waterRes = 0;
        player.lightningRes = 0;
        player.potions.push(potions.health);
        //player.potions.push(potions.health);
        //player.potions.push(potions.health);
             player.skills=[
          {
            name: 'Fire ball',
            type: 'Weapon',
            description:`Shoot a great ball of fire from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`,
            normalDamage: 0,
            fireDamage: 3,
            waterDamage: 0,
            lightningDamage: 0,
          },
          {
            name: 'Ice Beam',
            type: 'Weapon',
            description: `Shoot a great beam of ice from your 
                        hand, an offensive spell taght to all combat
                        mages at the church of Maji`, //TODO update ice beam desc
            normalDamage: 0,
            fireDamage: 0,
            waterDamage: 3,
            lightningDamage: 0,
          },
          {
            name: 'Heal',
            type: 'Ability',
            description: `Heal for ${player.magic} hp`,
            affect: () => 
            {
              $(`.weapon-holder`).remove();
              $('.ability-holder').remove();
              player.hp += player.magic;
              $('#btn-holder').append(
              `
              <div id='player-turn-message'>
                You healed for ${player.magic} hp!
              </div>
              `
              );
              setTimeout(() => {},1000);
            },
          },
          {
            name: 'Outsmart',
            type: 'Ability',
            description: `Use your cunning and trikery to bamboozle the
                          enemy and make a hefty escape`,
            affect: () => 
            {
              let chance = Math.random() * 8; 
              console.log(chance, player.intelligence)
              if(player.intelligence > chance) {
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    You succesfully outsmart the enemy!
                  </div>
                  `
                  );
                $('#enemy-stats').hide();
                setTimeout(() => {
                  $('#player-turn-message').remove();
                }, 1000);
                return true;
              }else {
                $(`.weapon-holder`).remove();
                $('.ability-holder').remove();
                $('#btn-holder').append(
                  `
                  <div id='player-turn-message'>
                    you fail to outsmart the enemy.
                  </div>
                  `
                  );
                setTimeout(() => {
                },1000);
                return false;
              }
            },
          }
        ]

    updatePlayerStats();
});

