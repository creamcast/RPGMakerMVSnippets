

BattleManager.startAction = function() {
    var subject = this._subject;
    //you can store the 'subject' or the info in it to a variable to be accessed in a common event that gets called by a skill.
    //the subject object will contain the player who used/cast the skill
	  $gameVariables.setValue(50, subject.name()); //store name of player who used the skill in variable 50
    var action = subject.currentAction();
    var targets = action.makeTargets();
    this._phase = 'action';
    this._action = action;
    this._targets = targets;
    subject.useItem(action.item());
    this._action.applyGlobal();
    this.refreshStatus();
    this._logWindow.startAction(subject, action, targets);
};
