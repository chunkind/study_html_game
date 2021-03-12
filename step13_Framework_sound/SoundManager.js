function SoundSystem(){
    this.isLoadComplete = false;
    this.nowResourceLoadedCount = 0; //현재 로딩된 리소스 수
    this.intAllResourceCount = 0; // 로딩해야 할 총 리소스 수
    this.arrSounds = new Array();
    return this;
}

SoundSystem.prototype.AddSound = function( fileName ){
    var soundMusic = new Audio();
    soundMusic.src = fileName;
    document.body.appendChild(soundMusic);

    soundMusic.addEventListener("canplaythrough", onLoadSoundComplete, false);
    this.arrSounds.push({name:fileName, sound: soundMusic});
    this.intAllResourceCount++;
}

SoundSystem.prototype.PlaySound = function(fileName){
    //사운드 출력
    for(var i=0; i<this.arrSounds.length; i++){
        if(this.arrSounds[i].name == fileName){
            this.arrSounds[i].sound.play();
        }
    }
}

function onLoadSoundComplete(){
    soundSystem.nowResourceLoadedCount++;
    //현재 로딩된 리소스 수와 총 리소스 수를 비교
    if(soundSystem.nowResourceLoadedCount <= soundSystem.intAllResourceCount){
        //모든 리소스 로딩 완료!!
        soundSystem.isLoadComplete = true;
    }
}

var soundSystem = new SoundSystem();