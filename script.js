$(document).ready(function() {
  var _that = this;
  _that.nextProcessAfterCompletion = null;
  _that.EQ5DCredentials = null;
  _that.currentScreen = null;
  _that.hasClick = null;
  _that.currentLanguage = null;
  _that.tempLanguage = null;
  _that.EQ5DTranslations = null;
  _that.EQ5DLocalTranslations = null;
  _that.currentTemplate = null;
  _that.currentProperty = null;
  _that.pErrorData = null;
  _that.LVcells = null;
  _that.localField = null;
  _that.hasMeasurement = null;
  _that.firstProcessAtLogIn = null;
  _that.SEQE5D5LHMFirstDisplay = null;
  _that.translatedText = null;
  _that.buttonClicked = null;
  _that.initialized = null;
  _that.userMeasurement = null;
  _that.EQ5D5LHeightTotal1 = null;
  _that.checkBoxList = null;
  _that.userPassword = null;
  _that.returnError = null;
  _that.userChoice = null;
  _that.translations = null;
  _that.userEnrolledKey = null;
  _that.SEQ5D5LFirstDisplay = null;
  _that.SEQ5D5LSplashFirstDisplay = null;
  _that.localOptions = null;
  _that.lastOptionValue = null;
  _that.tempDialogTitle = null;
  _that.error = null;
  _that.tempDialogMessage = null;
  _that.userID = null;
  _that.checkBoxElement = null;
  _that.localVar1 = null;
  _that.dialog = null;
  _that.isLoggingIn = null;
  _that.tempDialogButton = null;
  _that.checkBoxValue = null;
  _that.alarmScheduled = null;
  _that.tempDialogCancelButton = null;
  _that.signingURL = null;
  _that.ActiveSurveys = null;
  _that.WorkflowLibraryV37__processDefId = null;
  _that.WorkflowLibraryV37__tasks = null;
  _that.WorkflowLibraryV37__outcomeAndFieldMapping = null;
  _that.WorkflowLibraryV37__currentInitiator = null;
  _that.WorkflowLibraryV37__templateKey = null;
  _that.WorkflowLibraryV37_tempDict = null;
  _that.WorkflowLibraryV37_tempDict1 = null;
  _that.WorkflowLibraryV37__processData = null;
  _that.WorkflowLibraryV37__task = null;
  _that.WorkflowLibraryV37__formData = null;
  _that.WorkflowLibraryV37_tempList = null;
  _that.WorkflowLibraryV37__processVariabes = null;
  _that.WorkflowLibraryV37__outcomes = null;
  _that.WorkflowLibraryV37_tempNum = null;
  _that.WorkflowLibraryV37__formProperties = null;
  _that.WorkflowLibraryV37__formKey = null;
  _that.WorkflowLibraryV37_tempParam = null;
  _that.WorkflowLibraryV37__processDefKey = null;
  _that.WorkflowLibraryV37__formFields = null;
  _that.WorkflowLibraryV37__formName = null;
  _that.WorkflowLibraryV37__templateType = null;
  _that.WorkflowLibraryV37__processInstId = null;
  _that.WorkflowLibraryV37__userName = null;
  _that.WorkflowLibraryV37_tempList1 = null;
  _that.WorkflowLibraryV37_tempN2 = null;
  _that.WorkflowLibraryV37__processInstance = null;
  _that.WorkflowLibraryV37__userPassw = null;
  _that.WorkflowLibraryV37__taskToBeCompleted = null;
  _that.WorkflowLibraryV37__initiator = null;
  _that.WorkflowLibraryV37__urlSetup = null;
  _that.WorkflowLibraryV37__taskId = null;
  _that.WorkflowLibraryV37__processInstances = null;
  _that.WorkflowLibraryV37__formId = null;
  /**
   * Describe this function...
   */
  function initializeEQ5D5LlibV5() {
    return new Promise(function(resolve, reject) {
      // Block#: uE1FjbH{=o8W)30_A8(r
      _that.nextProcessAfterCompletion = '';
      // Block#: BUfwO#NYXwrN}Bi=?V!i
      _that.firstProcessAtLogIn = 'logInDemoV12';
      // Block#: |g:0JG/+euG@kitS?s|~
      _that.checkBoxList = [];
      // Block#: .?m(m|m_zeo~qi/`ZpOG
      _that.userEnrolledKey = 'userEnrolled';
      // Block#: 1fsnUrOLu2Vg83@0%tb+
      _that.lastOptionValue = null;
      // Block#: :ljf*K{nH@iY@2!-c^(n
      _that.userPassword = '';
      // Block#: 8G3,E:9NQ3bTwyD7`Rt}
      _that.buttonClicked = false;
      // Block#: s5@7_wn;:]eQnP.;^|4f
      _that.isLoggingIn = false;
      // Block#: ?LZ)+rsVdS(.JV(*E*+Z
      _that.alarmScheduled = false;
      // Block#: MHGaf/uPA,=kZ]!(Dn3q
      _that.currentScreen = '';
      // Block#: P+CrKYbGjdQ105[TJAhS
      _that.signingURL = '';
      // Block#: @9Vf`mM%gk!h8w(l{gY*
      _that.ActiveSurveys = [];
    });
  }
  /**
   * Describe this function...
   */
  function EQ5DTranslate(EQ5DText) {
    // Block#: MisjWv1]nB((V`Fdw`4-
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentLanguage, "EQUAL", 'en-US')) {
      return EQ5DText;
    }
    // Block#: wr3f:@TUmDXP$l=B-P7)
    _that.translatedText = '';
    // Block#: @5N9$%d-v$ACJvPQLwOT
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.EQ5DLocalTranslations, EQ5DText)) {
      // Block#: 1k;=yQ$7EARq7u^wqKC;
      _that.translatedText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.EQ5DLocalTranslations, EQ5DText), _that.currentLanguage));
      // Block#: (J*}BF^OF5y2lJQCHED|
      if(isValidString(_that.translatedText)) {
        return _that.translatedText;
      }
    }
    // Block#: n`$8jfb3cZ2ty|zT5nBF
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.EQ5DTranslations, EQ5DText)) {
      // Block#: kE/4SRPqYI!5TFj!%0^b
      _that.translatedText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.EQ5DTranslations, EQ5DText), _that.currentLanguage));
      // Block#: xD2[LC5uSj%bbWX7Qe;.
      if(isValidString(_that.translatedText)) {
        return _that.translatedText;
      }
    }
    return EQ5DText;
  }
  /**
   * To setup the user name and the password to access to the
   * workflow. Start from here to interact with the workflow.
   */
  function WorkflowLibraryV37__initWorkflowWithCredentials(User, Password, initiator) {
    return new Promise(function(resolve, reject) {
      // Block#: zC@!f!v3k}}*b|GXa$-u
      if(!(User == null || Password == null)) {
        // Block#: ]^$Y;X0-}*l_4$nA?jB9
        _that.WorkflowLibraryV37__userName = User;
        // Block#: Tx:Fiz?m4vg5,~ypEHr;
        _that.WorkflowLibraryV37__userPassw = Password;
        // Block#: fYiCub|QVm,4;am/r5Ax
        com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(_that.WorkflowLibraryV37__userName, _that.WorkflowLibraryV37__userPassw, _that.WorkflowLibraryV37__userName, "mobileApp", "https://develop.snapclinical.net:8443");
        // Block#: r]_8{Ov/L2qxdxQq0.DT
        if(initiator == null) {
          // Block#: u]~/HF,82OZm!?sA;$h]
          _that.WorkflowLibraryV37__initiator = '';
        } else {
          // Block#: L?Dm~(C;%$KM[cs^wt{C
          _that.WorkflowLibraryV37__initiator = initiator;
        }
      }
      // Block#: ^s$Sn}g4Wrilbw03t41H
      WorkflowLibraryV37__eraseParsedVars().then(response => {;
      });
      // Block#: Y@S#J}`:]1w3U^FU}d7F
      console.log('SDK initWorkflow with credentials called');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('SDK initWorkflow with credentials called');
        _that.debugService.printLog();
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__eraseParsedVars() {
    return new Promise(function(resolve, reject) {
      // Block#: :;k}H}ugLxKk@y`$!0.+
      _that.WorkflowLibraryV37__processDefId = '';
      // Block#: 4#+=3[=gnmpKOQe+lS2b
      _that.WorkflowLibraryV37__processInstId = '';
      // Block#: @klgC/T(4IX/WgYh24=/
      _that.WorkflowLibraryV37__processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: Tu5:|4f`Q0HDD8OoLA;9
      WorkflowLibraryV37__eraseParsedTasks().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__eraseParsedTasks() {
    return new Promise(function(resolve, reject) {
      // Block#: `1)6I?;*46Elnhk!$W-%
      _that.WorkflowLibraryV37__tasks = [];
      // Block#: ]erpGI6Z!az:aaD*0IMe
      _that.WorkflowLibraryV37__task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: tsGx{m1uu,{DX]t/$:1A
      _that.WorkflowLibraryV37__taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: L$AjHOz3TmMbAy:IH!6(
      _that.WorkflowLibraryV37__taskId = '';
      // Block#: E/4U*6@{zzW-2_iiNoAv
      _that.WorkflowLibraryV37__processVariabes = [];
      // Block#: yvsCWM*;UKj4XKK6hFA4
      _that.WorkflowLibraryV37__formKey = '';
      // Block#: 4DX?v}b)@G|W2MFTa=;M
      _that.WorkflowLibraryV37__formName = '';
      // Block#: }n|T|=,dlISig~Y?W-Mx
      _that.WorkflowLibraryV37__formProperties = [];
      // Block#: -?Waxyi;sEo1UMZiyL]Y
      _that.WorkflowLibraryV37__outcomeAndFieldMapping = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: rE)vDJewW2F{[A7rk$#5
      _that.WorkflowLibraryV37__templateType = '';
      // Block#: _is#z`ZULGZl!a_NauGg
      _that.WorkflowLibraryV37__templateKey = '';
      // Block#: Ayd96ng%IgXwf28dtSEx
      _that.WorkflowLibraryV37__formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: pHR%GqwfZG[oqh_(Y0MH
      _that.WorkflowLibraryV37__formFields = [];
      // Block#: {YG|c3Fb12Ro}cZ[9gCq
      _that.WorkflowLibraryV37__outcomes = [];
      // Block#: |[z2#-caB;%Pd/=[|f31
      _that.WorkflowLibraryV37__formId = '';
    });
  }
  /**
   * To complete the current task and get the next one if it exists.
   * You have to specify the outcome's name (valid outcome of the current task).
   */
  function WorkflowLibraryV37__completeAndGetNextTask(outcomeObj) {
    return new Promise(function(resolve, reject) {
      // Block#: 7=KJb9ZpU,se~aM[d,0g
      console.log(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
        _that.debugService.printLog();
      }
      // Block#: mysWPqPsV*o4%n_)0nH9
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37__taskToBeCompleted, 'outcome')) {
        // Block#: A~!@U:B@{vHpa{R?sQ#{
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'outcome', outcomeObj);
      }
      // Block#: *AL$m8VnvpB+=K%.x9[g
      console.log(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__taskToBeCompleted)))].join(''));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__taskToBeCompleted)))].join(''));
        _that.debugService.printLog();
      }
      // Block#: Tb%Z0:Q`rId2rhD:=/4l
      console.log(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.WorkflowLibraryV37__taskToBeCompleted))));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.WorkflowLibraryV37__taskToBeCompleted))));
        _that.debugService.printLog();
      }
      // Block#: ^Vv#,#ip6}#r84@zpsv%
      com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(_that.WorkflowLibraryV37__taskToBeCompleted,
        function(process_data) {
          // Block#: !F:A=9i{n^MTKen4#xJ;
          _that.WorkflowLibraryV37__processData = process_data;
          // Block#: .}]B1v{@Ij+I6k[?]uut
          WorkflowLibraryV37__parseProcessData(false, null).then(response => {;
          });
          // Block#: !fTLMH]:Zf0c|W{kE/[V
          console.log(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
            _that.debugService.printLog();
          }
          // Block#: 26NQ/=^-rX@1,8O|CP#/
          resolve({
            name: "success",
            data: process_data
          });
        },
        function(error_data) {
          // Block#: $2Mybx(ARQF?F..vx3Kc
          console.log(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
            _that.debugService.printLog();
          }
          // Block#: oDp}wFLVeirCQ#0?:^_m
          resolve({
            name: "failure",
            data: error_data
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__parseProcessData(onlyTasks, taskName) {
    return new Promise(function(resolve, reject) {
      // Block#: @gAO(;-Sg]8To(=X}re4
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37__processData, 'tasks')) {
        // Block#: Yr/Jjy)mmHX]y^R@fYj.
        if(onlyTasks) {
          // Block#: LFd#A)k1i#tv7du[`:iA
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__processData, 'processDefinitionId', _that.WorkflowLibraryV37__processDefId);
          // Block#: DEb*@bhZ(iB+Q*4jdIfX
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__processData, 'processInstanceId', _that.WorkflowLibraryV37__processInstId);
        } else {
          // Block#: SP]WIS;PVMZed}w;E,%l
          _that.WorkflowLibraryV37__processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__processData, 'processDefinitionId'));
          // Block#: )-n$f=^RE^s%/u/v5CG`
          _that.WorkflowLibraryV37__processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__processData, 'processInstanceId'));
        }
        // Block#: {)K1fEF5ZmskQZ(gCUMf
        _that.WorkflowLibraryV37__tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__processData, 'tasks'));
        // Block#: -|}FM!p8ouLw27^W5+^X
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37__tasks.length, "NEQ", 0)) {
          // Block#: MMO(%JAu{U;}W~+z,^`r
          _that.WorkflowLibraryV37_tempNum = WorkflowLibraryV37__findTask(taskName);
          // Block#: EKSB-:X05^]lT.T}3xo$
          console.log(['SDK  Parse process data using this index    ', _that.WorkflowLibraryV37_tempNum, ' to select the task in the list'].join(''));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(['SDK  Parse process data using this index    ', _that.WorkflowLibraryV37_tempNum, ' to select the task in the list'].join(''));
            _that.debugService.printLog();
          }
          // Block#: 9n(mzPhQVqIP@tsP9}Q,
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempNum, "GTE", 0)) {
            // Block#: %Y.h?!mLo?*:XJ`?HC(x
            _that.WorkflowLibraryV37__task = _that.WorkflowLibraryV37__tasks[_that.WorkflowLibraryV37_tempNum];
            // Block#: @s+xVTyZu?vH{3/QqK/M
            _that.WorkflowLibraryV37__taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'taskId'));
            // Block#: ;lkB|GpVV+eKQ-NXc.[p
            _that.WorkflowLibraryV37__taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [_that.WorkflowLibraryV37__taskId, []]);
            // Block#: /n)2UnL6A#Yt+#`@=/!I
            console.log(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
              _that.debugService.printLog();
            }
            // Block#: w(1=`TR5)MjF5YS%4//%
            _that.WorkflowLibraryV37__processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'processVariables'));
            // Block#: dt-R4,=3zf*9/Lf2{s(k
            _that.WorkflowLibraryV37__formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'formProperties'));
            // Block#: 13nFK!PGr8GVn`j}+K0a
            WorkflowLibraryV37__buildOutcomeAndFieldMappingList().then(response => {;
            });
            // Block#: tlpg10)NnX990p@Dib{h
            WorkflowLibraryV37__buildCurrentInitiator().then(response => {;
            });
            // Block#: lQV-ld|j0(,1c+}iRQK2
            _that.WorkflowLibraryV37__formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'formKey'));
            // Block#: _xH3pb~tChiPpQO_m7%4
            if(_that.WorkflowLibraryV37__formKey != null) {
              // Block#: o(t:yCA-?1Xwkj5l.`bo
              if(_that.WorkflowLibraryV37__formKey != '') {
                // Block#: Dcm3,A1%m7(Ld0be,b6q
                console.log(_that.WorkflowLibraryV37__task);
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(_that.WorkflowLibraryV37__task);
                  _that.debugService.printLog();
                }
                // Block#: ~|?3Hc+J|7y0s?}/MYHc
                _that.WorkflowLibraryV37__formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'formData'));
                // Block#: [?w3ImWd`tU6Gy)$L$oG
                console.log(_that.WorkflowLibraryV37__formData);
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(_that.WorkflowLibraryV37__formData);
                  _that.debugService.printLog();
                }
                // Block#: I_.O{No3oop2:d(jf,+^
                _that.WorkflowLibraryV37__formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formData, 'name'));
                // Block#: !K93l5^3744-f%r%4~@e
                _that.WorkflowLibraryV37__formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formData, 'fields'));
                // Block#: [%[RlD+;SFjjw_#uXGLy
                console.log(_that.WorkflowLibraryV37__formFields);
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(_that.WorkflowLibraryV37__formFields);
                  _that.debugService.printLog();
                }
                // Block#: 8Bokob5@%F}4F$o9O-Ym
                _that.WorkflowLibraryV37__outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formData, 'outcomes'));
                // Block#: `GuQb`Ket2{nA?)ypK%+
                _that.WorkflowLibraryV37__formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formData, 'id'));
                // Block#: 3mR|bI,_w:xDPPp!`yWL
                WorkflowLibraryV37__buildTemplateKey().then(response => {;
                });
                // Block#: *(vF8uJk=}.eajVrOY5S
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [_that.WorkflowLibraryV37__formId, _that.WorkflowLibraryV37__formKey, _that.WorkflowLibraryV37__formName, []]));
                // Block#: 4ztn~_pPUfT+$CuSOtcZ
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                // Block#: SbEu^j+BhYGK*7#yBG;H
                console.log(['SDK  task to be completed, added ', 'formId formKey and formName:', _that.WorkflowLibraryV37__formId, ' ', _that.WorkflowLibraryV37__formKey, ' ', _that.WorkflowLibraryV37__formName, '  and fields as empty list'].join(''));
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(['SDK  task to be completed, added ', 'formId formKey and formName:', _that.WorkflowLibraryV37__formId, ' ', _that.WorkflowLibraryV37__formKey, ' ', _that.WorkflowLibraryV37__formName, '  and fields as empty list'].join(''));
                  _that.debugService.printLog();
                }
              }
            }
          } else {
            // Block#: *w]5bGrB$}/{=EwsppeN
            WorkflowLibraryV37__eraseParsedTasks().then(response => {;
            });
          }
        } else {
          // Block#: }cF{ubs(?uKMmX=_xdGE
          WorkflowLibraryV37__eraseParsedTasks().then(response => {;
          });
        }
      } else {
        // Block#: R`K;C%o,{rT^ES.)8EH;
        if(onlyTasks == false) {
          // Block#: E#Cds}sp)(bP`iRL`A@h
          WorkflowLibraryV37__eraseParsedVars().then(response => {;
          });
        } else {
          // Block#: DT_2-W;?,?{zDoe@jp)o
          WorkflowLibraryV37__eraseParsedTasks().then(response => {;
          });
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__findTask(taskName) {
    // Block#: WTC6-HfO,mUMX(#YO3~2
    if(taskName == null) {
      return 0;
    }
    // Block#: wsgIeYDT,l}jybt9a`;a
    var index_end = _that.WorkflowLibraryV37__tasks.length - 1;
    var index_inc = 1;
    if(0 > index_end) {
      index_inc = -index_inc;
    }
    for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
      // Block#: 6_Q{yudk/vZ52}y]C],a
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__tasks[index], 'name'), "EQUAL", taskName)) {
        return index;
      }
    }
    return -1;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__buildOutcomeAndFieldMappingList() {
    return new Promise(function(resolve, reject) {
      // Block#: !zTRIn_acFMrK?Qf3uuD
      _that.WorkflowLibraryV37__outcomeAndFieldMapping = [];
      // Block#: s9I,tr88FpWEs8]EaSP}
      _that.WorkflowLibraryV37__templateType = '';
      // Block#: -@#eG~U^wUN{4U5{;s%q
      var item_list = _that.WorkflowLibraryV37__formProperties;
      for(var item_index in item_list) {
        item = item_list[item_index];
        // Block#: ?xKhVH~{w,}O*{s)K4lp
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
          // Block#: ,O7OB-6,?b!frFT$`:Iz
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
            // Block#: =udcCLDdQ[hOmcD?;RJQ
            _that.WorkflowLibraryV37__outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
          // Block#: bfT8Pyt-47nEF{@LPX/*
          _that.WorkflowLibraryV37__templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
        }
      }
      // Block#: AOC3_A!HOy:1Vt=_jSkr
      console.log(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomeAndFieldMapping)));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomeAndFieldMapping)));
        _that.debugService.printLog();
      }
      // Block#: IqKY2LntscRsSm9L0vt,
      console.log(String('SDK buildTemplateType: ') + String(_that.WorkflowLibraryV37__templateType));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('SDK buildTemplateType: ') + String(_that.WorkflowLibraryV37__templateType));
        _that.debugService.printLog();
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__safeLength(inputList) {
    // Block#: GSO$$)x|O|7tr+uS(*0v
    if(!inputList.length) {
      return 0;
    }
    return inputList.length;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__buildCurrentInitiator() {
    return new Promise(function(resolve, reject) {
      // Block#: #dx0sJ3OcN9E!dSn,@w}
      _that.WorkflowLibraryV37__currentInitiator = '';
      // Block#: jHrhOwD8VquA{dXlLdJ*
      _that.WorkflowLibraryV37_tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__task, 'processVariables'));
      // Block#: TyeWO=ugu[|]vH}2ZvkP
      var item_list2 = _that.WorkflowLibraryV37_tempList1;
      for(var item_index2 in item_list2) {
        item = item_list2[item_index2];
        // Block#: 9?C74H7ixEt$W%90ZT~;
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
          // Block#: yI~y8%,|JLTZifJ/^dAU
          _that.WorkflowLibraryV37__currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__buildTemplateKey() {
    return new Promise(function(resolve, reject) {
      // Block#: [SyH.#_-!8t(}vV+!]^r
      _that.WorkflowLibraryV37__templateKey = '';
      // Block#: Ag5u~N%yOV)||l]b0^lU
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37__formData, 'properties')) {
        // Block#: iWd7*23H#sqw+wfT^MFF
        _that.WorkflowLibraryV37_tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formData, 'properties'));
        // Block#: j@$$-rt-WX$u2}g.j5Ak
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37_tempDict1, 'templateKey')) {
          // Block#: GhC~vu/a#D(a~p%@KXYR
          _that.WorkflowLibraryV37__templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict1, 'templateKey'));
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getInitVar() {
    // Block#: gPq~?;_z-~G_(Bcn^=|d
    _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [_that.WorkflowLibraryV37__initiator, _that.WorkflowLibraryV37__userName, _that.WorkflowLibraryV37__userPassw, _that.WorkflowLibraryV37__processDefKey, _that.WorkflowLibraryV37__urlSetup]);
    // Block#: N?w23TNVy09rj$)*e(Y3
    console.log(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict;
  }
  /**
   * To start a new instance of the workflow or to resume the last run of it.
   * You must specify
   * - processDefinitionKey will be your Process Identifier (text)
   * - forceStartNewInstance will be set to true if you want to start
   * a new instance or to false if you need to resume an old one.
   */
  function WorkflowLibraryV37__startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
    return new Promise(function(resolve, reject) {
      // Block#: l`Yd*l[g8F.wxD10iBmH
      _that.WorkflowLibraryV37_tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
      // Block#: fs7fA;$I_%*D,Q_;ej0e
      if(listOfVars != null) {
        // Block#: x7z{V{^lJy:6v9A:):i~
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
        // Block#: Gd:QsRFiPFHepLX^;awJ
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'processVariables', listOfVars);
      }
      // Block#: $;SbM8S3Y=bM..5rEksT
      _that.WorkflowLibraryV37__processDefKey = processDefKey;
      // Block#: (P${f{/X=Gx8=ZK=F3nT
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, _that.WorkflowLibraryV37_tempDict1), {
          "processDefinitionKey": processDefKey
        }),
        function(process_data) {
          // Block#: YpWf.ePiTX),W68/JQ?j
          _that.WorkflowLibraryV37__processData = process_data;
          // Block#: ^z?^L68XOE@d2!(k.7B8
          WorkflowLibraryV37__parseProcessData(false, null).then(response => {;
          });
          // Block#: TgLhWKzt0^{|!u~bXzy*
          console.log(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
            _that.debugService.printLog();
          }
          // Block#: 9cQ,mM6!Y|yAmOz0d:rg
          resolve({
            name: "success",
            data: process_data
          });
        },
        function(error_data) {
          // Block#: ~r=HiT_6_QbNMax2ZFL.
          console.log(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
            _that.debugService.printLog();
          }
          // Block#: ]g3vK,Q.($GQ{;;p2FkF
          resolve({
            name: "failure",
            data: error_data
          });
        });
    });
  }
  /**
   * To complete the current task and get the next one if it exists.
   * You have to specify the outcome's name (valid outcome of the current task).
   */
  function WorkflowLibraryV37__completeAndGetNextTaskById(outcomeId) {
    return new Promise(function(resolve, reject) {
      // Block#: Yvtdyc_^[]=}cSnI*~4e
      console.log(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
        _that.debugService.printLog();
      }
      // Block#: b#$ien{n?@z|Tuv9=bl8
      if(WorkflowLibraryV37__doesExistOutcome(outcomeId)) {
        // Block#: 5y1H.}mF7iDlhW.Iz_Xd
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'outcome', WorkflowLibraryV37__getOutcome(outcomeId));
      }
      // Block#: qI{slP6*N3L0!OWa8/pz
      com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(_that.WorkflowLibraryV37__taskToBeCompleted,
        function(process_data) {
          // Block#: XdDy=(Gj`rF-EuuI.hEb
          _that.WorkflowLibraryV37__processData = process_data;
          // Block#: !pxYgrn2JJKS#y%ha5xV
          WorkflowLibraryV37__parseProcessData(false, null).then(response => {;
          });
          // Block#: !s|V2~N*I;QtUp3W*$~?
          console.log(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
            _that.debugService.printLog();
          }
          // Block#: @`ke?Ic1NMo4q~Vs8KRW
          resolve({
            name: "success",
            data: process_data
          });
        },
        function(error_data) {
          // Block#: J=y3t29Dhb#p[*-{K]u#
          console.log(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
            _that.debugService.printLog();
          }
          // Block#: RN_Tr*,Y:K?.OtKTT$rK
          resolve({
            name: "failure",
            data: error_data
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__doesExistOutcome(id) {
    // Block#: Hmb|}(N-?u9Vam.DojFf
    if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return false;
    }
    // Block#: WAad5%@cF]|J0Nu-+d=c
    var item_list3 = _that.WorkflowLibraryV37__outcomes;
    for(var item_index3 in item_list3) {
      item = item_list3[item_index3];
      // Block#: LGQ-c:Ry^kl]E9.SdcSR
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getOutcome(id) {
    // Block#: z_OwH@Vp!,|V.m?-5rR7
    _that.WorkflowLibraryV37_tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
    // Block#: aeK}#_56a0FW1;FlI/RA
    if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return _that.WorkflowLibraryV37_tempDict1;
    }
    // Block#: @-q#8vSu_;2Fy2N.F])N
    var item_list4 = _that.WorkflowLibraryV37__outcomes;
    for(var item_index4 in item_list4) {
      item = item_list4[item_index4];
      // Block#: n6w*.;8h*VC,sx]BPLCz
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
        // Block#: =c~Nd@B.[P1(9iv[U:0C
        _that.WorkflowLibraryV37_tempDict1 = item;
      }
    }
    // Block#: Q:N_kRnFcj/3%}|gFkR,
    console.log(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37_tempDict1)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37_tempDict1)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict1;
  }
  /**
   * To setup the user name and the password to access to the
   * workflow. Start from here to interact with the workflow.
   */
  function WorkflowLibraryV37__initWorkflow() {
    return new Promise(function(resolve, reject) {
      // Block#: hSdJ!zGqd3nW`R(|Sf|b
      WorkflowLibraryV37__eraseParsedVars().then(response => {;
      });
      // Block#: 1,)Pmk4]Lm63aroPtn?T
      console.log('SDK initWorkflow without credentials called');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('SDK initWorkflow without credentials called');
        _that.debugService.printLog();
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getProcessData() {
    // Block#: cJWzC?e4K2.s.bS5T3z+
    console.log(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__processData;
  }
  /**
   * To check if another task is available (true)
   * or the current flow is at the end (false).
   */
  function WorkflowLibraryV37__doesExistCurrentTask() {
    // Block#: =8(Ef*9BC62$E7_l3P#d
    console.log('CurrentTask: ');
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push('CurrentTask: ');
      _that.debugService.printLog();
    }
    // Block#: p7lzgBtkx$1VaQ;ah~M0
    console.log(_that.WorkflowLibraryV37__task);
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(_that.WorkflowLibraryV37__task);
      _that.debugService.printLog();
    }
    // Block#: _yNMsE4};MK%xzk^NnAp
    if(_that.WorkflowLibraryV37__task == null) {
      return false;
    }
    // Block#: Dx14Nbp7RJ%;nhUmlA%g
    if((com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__task)) == null) {
      return false;
    }
    return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__task)).length;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getCurrentTask() {
    // Block#: A//H39vF:Nwf4)0Ptt)[
    console.log(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__task))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__task))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__task;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getForm() {
    // Block#: hi_6#X@QWmYo``}%E6ns
    console.log(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__formData))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__formData))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__formData;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__setProcessVariable(name2, value, type) {
    return new Promise(function(resolve, reject) {
      // Block#: fl``|]bZhX,hsd+4=UBz
      console.log(['SDK setProcessVariable num of vars: ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(['SDK setProcessVariable num of vars: ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
        _that.debugService.printLog();
      }
      // Block#: /#+h`aY2tR8.(S4nB`Jc
      if(WorkflowLibraryV37__doesExistCurrentTask()) {
        // Block#: z-p:pd.s)zS|{{7^r{[c
        if(WorkflowLibraryV37__doesContainProcessVariableName(name2)) {
          // Block#: }rNCd{le_?[aGymKA/FM
          _that.WorkflowLibraryV37_tempNum = 0;
          // Block#: Re(v%NPcP]DK#yyeoy!w
          var item_list5 = _that.WorkflowLibraryV37__processVariabes;
          for(var item_index5 in item_list5) {
            item = item_list5[item_index5];
            // Block#: ^!7$,e6QAx)K!Ixl.0mT
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
              // Block#: *S+*GL/c@On+rlqx,}55
              _that.WorkflowLibraryV37_tempDict = item;
              // Block#: J5@4/Gl5WsPEv-DhwD7/
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict, 'value', value);
              // Block#: R.N)idyNnfb7(I+skE3s
              _that.WorkflowLibraryV37__processVariabes[_that.WorkflowLibraryV37_tempNum] = _that.WorkflowLibraryV37_tempDict;
            }
            // Block#: 7/Us9:R!s_F~=37{d^Q?
            _that.WorkflowLibraryV37_tempNum = _that.WorkflowLibraryV37_tempNum + 1;
          }
        } else {
          // Block#: K8{b.]4*)fBtMo7}Ds[G
          _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
          // Block#: wFb8gv7liSAXvA_Jgk.A
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.WorkflowLibraryV37__processVariabes, _that.WorkflowLibraryV37_tempDict)
        }
        // Block#: )}(N9doX5kiVPt#_uk5@
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__task, 'processVariables', _that.WorkflowLibraryV37__processVariabes);
        // Block#: D-i;X3`Uwn^AClSlvd:5
        _that.WorkflowLibraryV37__tasks[0] = _that.WorkflowLibraryV37__task;
        // Block#: +a61$mWaDwwZKQTEgH~Y
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__processData, 'tasks', _that.WorkflowLibraryV37__tasks);
        // Block#: fPHS4XlNp%eN-:,XOjB,
        console.log(String('SDK setProcessVariable num of vars now is: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes)));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('SDK setProcessVariable num of vars now is: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes)));
          _that.debugService.printLog();
        }
        // Block#: KlEG$rEaQ~Rk}950-A8S
        _that.WorkflowLibraryV37_tempNum = WorkflowLibraryV37__getIndexOfVarInTaskToBeCompleted(name2);
        // Block#: ]SDFJ:[~R3NMXK*$@h~i
        _that.WorkflowLibraryV37_tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'processVariables'));
        // Block#: I+_=:xhSHjH!OU$iVp(-
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempNum, "EQ", -1)) {
          // Block#: vN3ZQdo#dvO^)W0M/v`Z
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.WorkflowLibraryV37_tempList, _that.WorkflowLibraryV37_tempDict)
        } else {
          // Block#: `g*^=/2Ty+Z434}h4Wjv
          _that.WorkflowLibraryV37_tempList[_that.WorkflowLibraryV37_tempNum] = _that.WorkflowLibraryV37_tempDict;
        }
        // Block#: @uV`SeGSX@u!S/V=^_:y
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'processVariables', _that.WorkflowLibraryV37_tempList);
        // Block#: {,PP60KJ^8T[^~BYqau~
        console.log(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)));
          _that.debugService.printLog();
        }
      } else {
        // Block#: 31gi0ioB4Lvw}%V_e2v[
        console.log('SDK no current Task ... nothing to do');
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push('SDK no current Task ... nothing to do');
          _that.debugService.printLog();
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__doesContainProcessVariableName(target) {
    // Block#: V|qJmmTDcBN/R;.~0*!x
    if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
      return false;
    }
    // Block#: ryPt/oi=;{`_=;[IsFSs
    var item_list6 = _that.WorkflowLibraryV37__processVariabes;
    for(var item_index6 in item_list6) {
      item = item_list6[item_index6];
      // Block#: /~(YAz$I4GpUepu5HhmT
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getIndexOfVarInTaskToBeCompleted(name2) {
    // Block#: keut5NnNVASw]WxPR@s;
    _that.WorkflowLibraryV37_tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'processVariables'));
    // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
    _that.WorkflowLibraryV37_tempN2 = 0;
    // Block#: |oK40tIWA!G)nm0(!#{#
    while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempN2, "LT", _that.WorkflowLibraryV37_tempList.length)) {
      // Block#: ``J|E}D/!f~A@;(OT{jy
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempList[_that.WorkflowLibraryV37_tempN2], 'name'), "EQUAL", name2)) {
        return _that.WorkflowLibraryV37_tempN2;
      }
      // Block#: +9z_@/4V1Jjk$_#N5B.v
      _that.WorkflowLibraryV37_tempN2 = _that.WorkflowLibraryV37_tempN2 + 1;
    }
    return -1;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getProcessVariables() {
    // Block#: E`snYA58/d#sQh_a17C[
    console.log(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__processVariabes))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__processVariabes;
  }
  /**
   * To retrieve all the outcomes coming from the current form.
   */
  function WorkflowLibraryV37__getOutcomes() {
    // Block#: sy(^MV.6A9]*3VwE5d=[
    console.log(String('SDK getFormOutcomes  number of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomes)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getFormOutcomes  number of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomes)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__outcomes;
  }
  /**
   * To set the value of a specific field (addressed by its id) in the current form.
   */
  function WorkflowLibraryV37__setField(id, value) {
    return new Promise(function(resolve, reject) {
      // Block#: TzKGO;g_YjLqhS#0X?XE
      _that.WorkflowLibraryV37_tempNum = 0;
      // Block#: Gmr6DFY_$]$Onm?wH=K8
      while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempNum, "LT", _that.WorkflowLibraryV37__formFields.length)) {
        // Block#: ya6:gp/0UhHZ^jZ,n{ws
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__formFields[_that.WorkflowLibraryV37_tempNum], 'id'), "EQUAL", id)) {
          // Block#: BbpN{WQk!0#mQr.=Y1L;
          _that.WorkflowLibraryV37_tempDict = _that.WorkflowLibraryV37__formFields[_that.WorkflowLibraryV37_tempNum];
          // Block#: ;,+{i7(;#tUIDzDdf{KF
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict, 'value', value);
          // Block#: lUqh=7+A/C(IshM=g9Rk
          _that.WorkflowLibraryV37__formFields[_that.WorkflowLibraryV37_tempNum] = _that.WorkflowLibraryV37_tempDict;
          // Block#: MAcVF+F1OQH~RUf4yV(d
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__formData, 'fields', _that.WorkflowLibraryV37__formFields);
          // Block#: XU[?$x9Vd_{6#8=^H.?5
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__task, 'formData', _that.WorkflowLibraryV37__formData);
          // Block#: o6A9$vEvQ$CX`hZNDqc,
          _that.WorkflowLibraryV37__tasks[0] = _that.WorkflowLibraryV37__task;
          // Block#: 6IEe*mXQ+Hb:/3;b%:n~
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__processData, 'tasks', _that.WorkflowLibraryV37__tasks);
          // Block#: $GFA%qdt(C`srr69+Q1@
          console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', _that.WorkflowLibraryV37_tempNum].join(''));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', _that.WorkflowLibraryV37_tempNum].join(''));
            _that.debugService.printLog();
          }
          // Block#: uR5[y9z{]{l:~;r1?V9c
          _that.WorkflowLibraryV37_tempNum = WorkflowLibraryV37__getIndexOfFieldInTaskToBeCompleted(id);
          // Block#: _E;9Ai[d5z:$/`.c%=~I
          _that.WorkflowLibraryV37_tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData'), 'fields'));
          // Block#: xML5Wx(Qp/zE(45t7ol!
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempNum, "EQ", -1)) {
            // Block#: UI[pML9Gr$GM?Q/B9gg8
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.WorkflowLibraryV37_tempList, _that.WorkflowLibraryV37_tempDict)
            // Block#: of_9V_*h-7[70WY{BH#1
            console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
              _that.debugService.printLog();
            }
          } else {
            // Block#: jYu#z)/4=AT3N1OT.QDA
            _that.WorkflowLibraryV37_tempList[_that.WorkflowLibraryV37_tempNum] = _that.WorkflowLibraryV37_tempDict;
            // Block#: v0v6MPF7=oRnhD2iJyJj
            console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', _that.WorkflowLibraryV37_tempNum].join(''));
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', _that.WorkflowLibraryV37_tempNum].join(''));
              _that.debugService.printLog();
            }
          }
          // Block#: v#u]|-I^I$=I%Ra[/shq
          _that.WorkflowLibraryV37_tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData'));
          // Block#: )fj(zVkdRK;R9vGUb5`u
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'fields', _that.WorkflowLibraryV37_tempList);
          // Block#: 4!+*uIn7R;Tlg62eD_}_
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData', _that.WorkflowLibraryV37_tempDict1);
          // Block#: :u:dF[+1Igp{Y96s#Af1
          _that.WorkflowLibraryV37_tempNum = _that.WorkflowLibraryV37__formFields.length;
        }
        // Block#: J*42yn66r4)vZ1]G,:{R
        _that.WorkflowLibraryV37_tempNum = _that.WorkflowLibraryV37_tempNum + 1;
      }
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getIndexOfFieldInTaskToBeCompleted(id) {
    // Block#: 5=t7)tc,=*|1%EX*E:ar
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData')) {
      // Block#: e^MNyo:cL}rgzwQiDh:W
      _that.WorkflowLibraryV37_tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37__taskToBeCompleted, 'formData'), 'fields'));
      // Block#: I8*RkEssW?gZN6oC^`fv
      _that.WorkflowLibraryV37_tempN2 = 0;
      // Block#: Rmax|B_*1=ZM(jS@if@z
      while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37_tempN2, "LT", _that.WorkflowLibraryV37_tempList.length)) {
        // Block#: Vd=`^eeI0qj+J}/%LOK$
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempList[_that.WorkflowLibraryV37_tempN2], 'id'), "EQUAL", id)) {
          return _that.WorkflowLibraryV37_tempN2;
        }
        // Block#: Z{Jl#bGbdcj];r]_hB?%
        _that.WorkflowLibraryV37_tempN2 = _that.WorkflowLibraryV37_tempN2 + 1;
      }
    }
    return -1;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormProperties() {
    // Block#: Q9K_jdXSe}PAge/y=Im@
    console.log(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__formProperties))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__formProperties))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__formProperties;
  }
  /**
   * To retrieve all data coming from a specific field
   * (addressed by its UIObjRef) in the current form.
   */
  function WorkflowLibraryV37__findFieldByRef(UIObjRef) {
    // Block#: E`%o_%L1dGWeMJRKQrxZ
    _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
    // Block#: AmMLWFRjWTe2^Zsu;kDQ
    if(UIObjRef == null) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: A|bEyO8:0#l8IBVOquC+
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: 0-fD_8Yu$rxjLln(~]Z.
    var item_list7 = _that.WorkflowLibraryV37__formFields;
    for(var item_index7 in item_list7) {
      item = item_list7[item_index7];
      // Block#: }:t(bf}yQx-BclxW}L/T
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
        // Block#: !?53|IPkE6/t6r+R#ADI
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
          // Block#: U0Zp:/!GtSl{nv+A!ed%
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
            // Block#: jO4#NAf@zsC)3Q48by)U
            _that.WorkflowLibraryV37_tempDict = item;
          }
        }
      }
    }
    // Block#: Avn^RG~mVyG$vg%D6oud
    console.log(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'name'))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'name'))].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormKey() {
    // Block#: UF+`UV=b`,zevWhv#k+]
    console.log(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__formKey)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__formKey)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__formKey;
  }
  /**
   * To start a new instance of the workflow or to resume the last run of it.
   * You must specify
   * - processDefinitionKey will be your Process Identifier (text)
   * - forceStartNewInstance will be set to true if you want to start
   * a new instance or to false if you need to resume an old one.
   */
  function WorkflowLibraryV37__startNewProcessInstance(processDefKey, forceStartNewInstance) {
    return new Promise(function(resolve, reject) {
      // Block#: }q/,[;-@$g=WGfa}:bNG
      _that.WorkflowLibraryV37_tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
      // Block#: _.a@//oU1{WOm%#o/xf1
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
      // Block#: zIQs3yCF/NkA(?4/|u-v
      if(_that.WorkflowLibraryV37__initiator != null) {
        // Block#: ;/m,htUp.hBP{I/Ez~XO
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.WorkflowLibraryV37__initiator, "EQUAL", '')) {
          // Block#: sPF35ko=|eWU*@pLPx7M
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', _that.WorkflowLibraryV37__initiator, 'equals', 'string'])]);
        }
      }
      // Block#: @]Ba!E=3tn~Oj+Wf+FOr
      _that.WorkflowLibraryV37__processDefKey = processDefKey;
      // Block#: w?kgPk4G/`abd)qr0~)@
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, _that.WorkflowLibraryV37_tempParam), {
          "processDefinitionKey": processDefKey
        }),
        function(process_data) {
          // Block#: 4f$QXZ+E0Aq{G1kdn:BL
          _that.WorkflowLibraryV37__processData = process_data;
          // Block#: Ffc^U`Q4:KIi:s8TwD)p
          WorkflowLibraryV37__parseProcessData(false, null).then(response => {;
          });
          // Block#: YNvH8H}e45(z6)yl=%zg
          console.log(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
            _that.debugService.printLog();
          }
          // Block#: `XnGAXK_~8#a8^^1Q0pB
          resolve({
            name: "success",
            data: _that.WorkflowLibraryV37__processData
          });
        },
        function(error_data) {
          // Block#: QxAXGB2r!RBjr?P,.I/w
          console.log(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
            _that.debugService.printLog();
          }
          // Block#: FWJsGFdBn_II9yj_]B1g
          resolve({
            name: "failure",
            data: error_data
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getTemplateKey() {
    // Block#: +I(?+Ahsb|IJ:@-Qd^qq
    console.log(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__templateKey)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__templateKey)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__templateKey;
  }
  /**
   * To get the current task if it exists.
   */
  function WorkflowLibraryV37__getActiveProcessInstances(processDefKey) {
    return new Promise(function(resolve, reject) {
      // Block#: z2@:P7^44=~j)4}58Q-Y
      _that.WorkflowLibraryV37__processDefKey = processDefKey;
      // Block#: j*]!vGv^qc[AGgp]`PY8
      _that.WorkflowLibraryV37_tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__processDefKey))]);
      // Block#: (?q[nPn/3eWB8,eb:c)W
      if(_that.WorkflowLibraryV37__initiator != null) {
        // Block#: EwO-oR3l$s-)J!ZV]?OJ
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.WorkflowLibraryV37__initiator, "EQUAL", '')) {
          // Block#: KjohidB/ikkCe{|^PnsL
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', _that.WorkflowLibraryV37__initiator, 'equals', 'string'])]);
        }
      }
      // Block#: d4nuXQ:5M8V2yVC2y+cp
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/flowable-task/snap-api/get-process-instances', "POST", JSON.stringify(_that.WorkflowLibraryV37_tempDict1),
        function(data) {
          // Block#: ~wZ/RQ.G`)9#C+xdt?lo
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
            // Block#: r6o$^E*L7-2jj(nbidL1
            _that.WorkflowLibraryV37__processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
            // Block#: W@/NoI4WJ=cM9gHZ]Z{1
            console.log('SDK getActiveProcessInstances success');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('SDK getActiveProcessInstances success');
              _that.debugService.printLog();
            }
            // Block#: ^*^ulNcZnM=2C;BIiBe!
            WorkflowLibraryV37__parseProcessInstances().then(response => {;
            });
            // Block#: y/ur{vaAvbQV?t^(uQqL
            resolve({
              name: "success",
              data: data
            });
          } else {
            // Block#: gh%$j0MN=-[jO#@E^*nZ
            console.log('SDK getActiveProcessInstances NO processInstances field in dictionary');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('SDK getActiveProcessInstances NO processInstances field in dictionary');
              _that.debugService.printLog();
            }
            // Block#: FKr.fH,-V)8]rYEgqsS2
            resolve({
              name: "failure",
              data: data
            });
          }
        },
        function(error) {
          // Block#: Fy|bVWQgN?k:ln$%r/3`
          console.log(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
            _that.debugService.printLog();
          }
          // Block#: R5:`s`FGH$IfPAZQ_IT_
          resolve({
            name: "failure",
            data: error
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__parseProcessInstances() {
    return new Promise(function(resolve, reject) {
      // Block#: A+6!5KzJQo/kx!@}Et:g
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.WorkflowLibraryV37__processInstances.length, "GT", 0)) {
        // Block#: f5%|B..:cO+qaH/~Zye1
        _that.WorkflowLibraryV37__processInstance = _that.WorkflowLibraryV37__processInstances[0];
        // Block#: c-;=6HC9M$?A#fcC5)-2
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37__processInstance, 'processInstanceId')) {
          // Block#: e1I,qRai}Ej2NQ_D2mB|
          console.log(['SDK parseProcessInstances num of instances: ', _that.WorkflowLibraryV37__processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processInstance)))].join(''));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(['SDK parseProcessInstances num of instances: ', _that.WorkflowLibraryV37__processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processInstance)))].join(''));
            _that.debugService.printLog();
          }
        }
      } else {
        // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
        _that.WorkflowLibraryV37__processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: 13[HIvY12@6=}71jk5/I
        console.log('SDK parseProcessInstances NO instances');
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push('SDK parseProcessInstances NO instances');
          _that.debugService.printLog();
        }
      }
    });
  }
  /**
   * To retrieve all data coming from all the fields in the current form.
   */
  function WorkflowLibraryV37__getFields() {
    // Block#: 2AE2h7pC5GiDeqp.l2RD
    console.log(String('SDK getFields  number of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__formFields)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getFields  number of items: ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__formFields)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__formFields;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getOutcomeAndFieldMappingNames() {
    // Block#: }]hO!V5itfl+*{@e+3t;
    _that.WorkflowLibraryV37_tempList = [];
    // Block#: =E!_C0Emn$i=4w5BY1U{
    var item_list8 = _that.WorkflowLibraryV37__outcomeAndFieldMapping;
    for(var item_index8 in item_list8) {
      item = item_list8[item_index8];
      // Block#: (`rebY,UT0Yp!34(.Ddb
      com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.WorkflowLibraryV37_tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
    }
    // Block#: URUoW(x4w51U!V.Ij+ls
    console.log(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempList;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getRadioButtons(id) {
    // Block#: kL~]$:SJ`oHep_=_meyI
    _that.WorkflowLibraryV37_tempList = [];
    // Block#: O5*Z-q4DqKqp:D5TDq8|
    if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      // Block#: ?lZ`A_qD[jdQ2wwoB5)z
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(WorkflowLibraryV37__getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
        com.fc.JavaScriptDistLib.TextLib.textComparison(WorkflowLibraryV37__getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
      ) {
        // Block#: `7;|(C`F]~KCQv~l|D9k
        _that.WorkflowLibraryV37_tempList = WorkflowLibraryV37__getFieldAttribute(id, 'options');
      }
    }
    // Block#: pl9Eqx:ncTQfLCrr~aD2
    console.log(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempList;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFieldAttribute(id, attribute) {
    // Block#: AE8/N]U,,8buovGLSUT^
    _that.WorkflowLibraryV37_tempDict = WorkflowLibraryV37__getField(id);
    // Block#: .Fqp|67m^Ay!]7@~[6)L
    if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37_tempDict, attribute))) {
      return null;
    }
    // Block#: AMknf3K|MoXZ{H:1R/_Z
    console.log(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute)))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute)))].join(''));
      _that.debugService.printLog();
    }
    return com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute);
  }
  /**
   * To retrieve all data coming from a specific
   * field (addressed by its id) in the current form.
   */
  function WorkflowLibraryV37__getField(id) {
    // Block#: xL!qrflVW3U]^6E[Ka7X
    _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
    // Block#: )sJIHe}gUXt?_9iK+^0?
    if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: XgNIt?jJ6?T9CsWs3/:U
    var item_list9 = _that.WorkflowLibraryV37__formFields;
    for(var item_index9 in item_list9) {
      item = item_list9[item_index9];
      // Block#: !`bO*xQV7m:mj+Q|}a*}
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
        // Block#: %]a_L$pkI|-oIgp;d_^~
        _that.WorkflowLibraryV37_tempDict = item;
      }
    }
    // Block#: {qd=G*Ep}cbKLFgQA)m?
    console.log(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'name'))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'name'))].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormName() {
    // Block#: aKTnD6jr`A{q{YTZwO7Z
    console.log(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__formName)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__formName)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__formName;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getOutcomeAndFieldMapping() {
    // Block#: HYJJO3YM}m5PH)dot_;L
    console.log(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomeAndFieldMapping))));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37__outcomeAndFieldMapping))));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__outcomeAndFieldMapping;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getCheckBoxFields() {
    // Block#: KgYQHyA[{0h%=dh`_w=w
    _that.WorkflowLibraryV37_tempList = [];
    // Block#: x=6]f[D:]WW2.Ae_b(LN
    var item_list10 = _that.WorkflowLibraryV37__formFields;
    for(var item_index10 in item_list10) {
      item = item_list10[item_index10];
      // Block#: !VHezD%rcRIQgXbY6I#-
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
        com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
      ) {
        // Block#: W.R+J~2c.47gbb7g=0Kr
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.WorkflowLibraryV37_tempList, item)
      }
    }
    // Block#: H2)WXl^eh~i-@e^Sdj_m
    console.log(String('SDK getCheckBoxFields   lenght of list is ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getCheckBoxFields   lenght of list is ') + String(WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempList;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getProcessVariable(name2) {
    // Block#: ;#jDl#n`yf:1,8;:lnAR
    _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
    // Block#: XltA0Qsjuc@qZk+g@D:~
    if(name2 == null) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: @(^uxre=m-ru5AROPHfj
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: .t6K,XR}:7`WLDV*s|bh
    var item_list11 = _that.WorkflowLibraryV37__processVariabes;
    for(var item_index11 in item_list11) {
      item = item_list11[item_index11];
      // Block#: M[|u!ld}E3HE4Gq?d?Cb
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
        // Block#: l}su24J5MF;*~WC.!bw!
        _that.WorkflowLibraryV37_tempDict = item;
      }
    }
    // Block#: XwO+q]~ZbFl5q];Gp1h{
    console.log(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'value')))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'value')))].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormProperty(id) {
    // Block#: P==W8qd^sLKt/U/T!A`O
    _that.WorkflowLibraryV37_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
    // Block#: NjA`f7iC6R|Nvuuh_zHT
    if(id == null) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: ZN%M9~+IRToLl{9Tvj;W
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return _that.WorkflowLibraryV37_tempDict;
    }
    // Block#: lzsZLHdLML%ib`^$UT~b
    var item_list12 = _that.WorkflowLibraryV37__formProperties;
    for(var item_index12 in item_list12) {
      item = item_list12[item_index12];
      // Block#: /x7cK`HZ;{.hb0lNE]Uo
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
        // Block#: nj@:3IQ:)z(t:K9Ob{T@
        _that.WorkflowLibraryV37_tempDict = item;
      }
    }
    // Block#: K8AE]-RKuIY5h7=!{^BM
    console.log(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'value')))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'value')))].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempDict;
  }
  /**
   * To get the current task if it exists.
   */
  function WorkflowLibraryV37__getActiveTasks(processDefKey, processInstanceId, taskName) {
    return new Promise(function(resolve, reject) {
      // Block#: ey(cV_wHzhJ9H6qXD]37
      _that.WorkflowLibraryV37_tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: f12dw.TGq}s(s1yD^/lp
      if(processDefKey != null) {
        // Block#: J6Z=cf|3x%@18q=k5[q)
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
          // Block#: HB|OVu=^enpx,j^/]R6s
          _that.WorkflowLibraryV37__processDefKey = processDefKey;
          // Block#: rL:v7E@!K_U=|k_~WrLT
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'processDefinitionKey', _that.WorkflowLibraryV37__processDefKey);
        }
      }
      // Block#: 4!R@`C:h_-#N0Z0Rep2}
      if(processInstanceId != null) {
        // Block#: ?t}~z.*O`5RA;}2sJD;I
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
          // Block#: oCeYVNOV{Zy{9F$2Gj9~
          _that.WorkflowLibraryV37__processInstId = processInstanceId;
          // Block#: [vM2Gu]]r2A^|hQ2c$D/
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'processInstanceId', _that.WorkflowLibraryV37__processInstId);
        }
      }
      // Block#: /8$vg`tlvr)I/-qrnq)f
      if(_that.WorkflowLibraryV37__initiator != null) {
        // Block#: bGv$z]%iZx_hy^A(mn]$
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.WorkflowLibraryV37__initiator, "EQUAL", '')) {
          // Block#: m,a3ucfMrL!k_U,{_EO0
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.WorkflowLibraryV37_tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', _that.WorkflowLibraryV37__initiator, 'equals', 'string'])]);
        }
      }
      // Block#: /Ow/jfKcIa%l$Qr_T{C~
      com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(_that.WorkflowLibraryV37_tempDict1,
        function(active_tasks) {
          // Block#: Y+XH|qV1|L_]qsg1Qys%
          _that.WorkflowLibraryV37__processData = active_tasks;
          // Block#: K.t.2K}]vIh6/Mf#l.3b
          WorkflowLibraryV37__parseProcessData(true, taskName).then(response => {;
          });
          // Block#: /HzjPf1m|C+|jS~?f0;T
          console.log(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37__processData))));
            _that.debugService.printLog();
          }
          // Block#: Yc3-G+0JFUnjl+/[0S4u
          resolve({
            name: "success",
            data: active_tasks
          });
        },
        function(error_data) {
          // Block#: ?is]iK53/8^j+r-H;FuH
          console.log(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
            _that.debugService.printLog();
          }
          // Block#: 2Uo.6@:,;O.;_YLzMYC5
          resolve({
            name: "failure",
            data: error_data
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getCurrentInitiator() {
    // Block#: $9@jRx_-Dx:f$AAw6RA$
    console.log(String('SDK getCurrentInitiator: ') + String(_that.WorkflowLibraryV37__currentInitiator));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getCurrentInitiator: ') + String(_that.WorkflowLibraryV37__currentInitiator));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__currentInitiator;
  }
  /**
   * To set the value of a specific field (addressed
   * by its UIObjRef) in the current form.
   */
  function WorkflowLibraryV37__setFieldByRef(UIObjRef, value) {
    return new Promise(function(resolve, reject) {
      // Block#: PkA[wrI4fzxst0S;MTh/
      WorkflowLibraryV37__setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(WorkflowLibraryV37__findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
      });
      // Block#: zrA8?}+!5{(%@ttT3R:R
      console.log(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
        _that.debugService.printLog();
      }
    });
  }
  /**
   * To retrieve the name of a specific field
   * (addressed by its UIObjRef) in the current form.
   */
  function WorkflowLibraryV37__findFieldNameByRef(UIObjRef) {
    // Block#: 82f25)8;O:)08a%$#cU_
    _that.WorkflowLibraryV37_tempDict = WorkflowLibraryV37__findFieldByRef(UIObjRef);
    // Block#: dZ6]%)-~$L%6{Mk55nI3
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37_tempDict, 'name')) {
      // Block#: XFP`bPN%G@!O_uD.FJ$A
      _that.WorkflowLibraryV37_tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, 'name'));
    } else {
      // Block#: vu%vGt,6Uk:8L8PK=zm!
      _that.WorkflowLibraryV37_tempParam = '';
    }
    // Block#: c~^fO3=s}Uv?m-iM}1%a
    console.log(['findFieldNameByRef: ', UIObjRef, ' name: ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['findFieldNameByRef: ', UIObjRef, ' name: ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getDropDown(id) {
    // Block#: xpHGkF|gd$#}]6DXju!`
    _that.WorkflowLibraryV37_tempList = [];
    // Block#: k{zx,_t0ebEM0Van4H6Z
    if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      // Block#: gfCE?yFUub11fN8:|xka
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(WorkflowLibraryV37__getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
        com.fc.JavaScriptDistLib.TextLib.textComparison(WorkflowLibraryV37__getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
      ) {
        // Block#: r:H~(ApVAgsg%=0IG@/]
        _that.WorkflowLibraryV37_tempList = WorkflowLibraryV37__getFieldAttribute(id, 'options');
      }
    }
    // Block#: vF*EB]#~pvJ}^{~QI{v7
    console.log(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', WorkflowLibraryV37__safeLength(_that.WorkflowLibraryV37_tempList)].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempList;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFieldValue(id) {
    // Block#: s6FqVVq=NZ#ucQQU3:zG
    _that.WorkflowLibraryV37_tempParam = WorkflowLibraryV37__getFieldAttribute(id, 'value');
    // Block#: $6dm%.yz`%+?YAu@Tl]~
    console.log(['SDK getFieldValue id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFieldValue id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFieldLabel(id) {
    // Block#: p|}E|`~~yY28XRG_.w6w
    _that.WorkflowLibraryV37_tempParam = WorkflowLibraryV37__getFieldAttribute(id, 'name');
    // Block#: Tn]~AZrqwG*RLVYIvt%b
    console.log(['SDK getFieldName id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFieldName id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * To retrieve the value of a specific field
   * (addressed by its UIObjRef) in the current form
   */
  function WorkflowLibraryV37__findFieldValueByRef(UIObjRef) {
    // Block#: -pa`9ks9V+mL|=~ak=fe
    _that.WorkflowLibraryV37_tempParam = WorkflowLibraryV37__findFieldByRef(UIObjRef);
    // Block#: ;WKPLteeJU.q2Aljj_Dy
    if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempParam)).length) {
      return '';
    }
    // Block#: VZl5#iC7FW`s7g:hqcj(
    _that.WorkflowLibraryV37_tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempParam, 'value'));
    // Block#: cg,DLy$PagPQ6zV#fP1$
    console.log(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37_tempParam))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37_tempParam))].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getProcessVariableValue(name2) {
    // Block#: $A+E]85X)9yix.DB)Pe)
    _that.WorkflowLibraryV37_tempDict1 = WorkflowLibraryV37__getProcessVariable(name2);
    // Block#: S{VIIeX4HqAy{5dPron=
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37_tempDict1, 'value')) {
      return null;
    }
    return com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict1, 'value');
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormPropertyAttribute(id, attribute) {
    // Block#: $Qypr}D:dDnS34}Rv^qh
    _that.WorkflowLibraryV37_tempDict = WorkflowLibraryV37__getFormProperty(id);
    // Block#: PWK?Ib/jr67@[`=+[bgs
    if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.WorkflowLibraryV37_tempDict, attribute))) {
      return null;
    }
    // Block#: Q^9U[?RhR^]#/6M@7BHx
    console.log(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute)))].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.WorkflowLibraryV37_tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute)))].join(''));
      _that.debugService.printLog();
    }
    return com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.WorkflowLibraryV37_tempDict, attribute);
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getOutcomeName(id) {
    // Block#: ^ymSIrW:$f28p@6[SI@U
    _that.WorkflowLibraryV37_tempParam = '';
    // Block#: ~{)~$)O/yh)O{Y%5CQ#X
    if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return '';
    }
    // Block#: 4lvrEM]*#hq^O2]:Qm=:
    var item_list13 = _that.WorkflowLibraryV37__outcomes;
    for(var item_index13 in item_list13) {
      item = item_list13[item_index13];
      // Block#: TEa|F|P8n,!X.Ll;G_}3
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
        // Block#: 76Faw_b`B(+D/HE5v^H4
        _that.WorkflowLibraryV37_tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
      }
    }
    // Block#: 37=4oHW1KOquM92@|%S/
    console.log(String('SDK getOutcomeName by id : ') + String(_that.WorkflowLibraryV37_tempParam));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getOutcomeName by id : ') + String(_that.WorkflowLibraryV37_tempParam));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * To retrieve the id of a specific field
   * (addressed by its UIObjRef) in the current form
   */
  function WorkflowLibraryV37__findFieldIDByRef(UIObjRef) {
    // Block#: ~g_kuTs~[S)9RPjA6vB5
    _that.WorkflowLibraryV37_tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(WorkflowLibraryV37__findFieldByRef(UIObjRef), 'id'));
    // Block#: CKAAyvw./=$iA+pq.L9n
    console.log(['findFieldIdByRef: ', UIObjRef, ' ID: ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['findFieldIdByRef: ', UIObjRef, ' ID: ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormPropertyName(id) {
    // Block#: J*-rAsH1kZb=7ib9-N-t
    _that.WorkflowLibraryV37_tempParam = WorkflowLibraryV37__getFormPropertyAttribute(id, 'name');
    // Block#: -o{Mn9!*Tgzb4jE5Ifi5
    console.log(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getIdofFirstRadioButtonField() {
    // Block#: c;r0yn;{i`q,NI`93T2{
    var item_list14 = _that.WorkflowLibraryV37__formFields;
    for(var item_index14 in item_list14) {
      item = item_list14[item_index14];
      // Block#: fe0oj*!QQ5WMS14rD3Rk
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
        com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
      ) {
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
      }
    }
    return '';
  }
  /**
   * To retrieve all data coming from a specific field
   * (addressed by its UIObjRef) in the current form.
   */
  function WorkflowLibraryV37__doesExistField(id) {
    // Block#: G72*ZfWyTVTTF*YW+;u3
    if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
      return false;
    }
    // Block#: $8p*?d{P+-m|/n`#OWXv
    var item_list15 = _that.WorkflowLibraryV37__formFields;
    for(var item_index15 in item_list15) {
      item = item_list15[item_index15];
      // Block#: imU3?.3TfXu=qUOz[4Vg
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
        // Block#: O{V`?*@eRf||XBK]`Z2J
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
          return true;
        }
        // Block#: u]nwgfv?0gzJ4|QKa8ba
        console.log(String('SDK  doesExistField (true) by ID ') + String(id));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('SDK  doesExistField (true) by ID ') + String(id));
          _that.debugService.printLog();
        }
      }
    }
    return false;
  }
  /**
   * To retrieve the template type you have associated
   * to the current task. This is a specific value set
   * in the form properties section as TemplateType.
   */
  function WorkflowLibraryV37__getTemplateType() {
    // Block#: i[TClUtvG0?cy,~h2[3n
    console.log(String('SDK getTemplateType: ') + String(_that.WorkflowLibraryV37__templateType));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getTemplateType: ') + String(_that.WorkflowLibraryV37__templateType));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__templateType;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getFormPropertyValue(id) {
    // Block#: DH;d_..2@hQzhZWl3Qay
    _that.WorkflowLibraryV37_tempParam = WorkflowLibraryV37__getFormPropertyAttribute(id, 'value');
    // Block#: P%{C|4nOh(7dS)67dHv(
    console.log(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', _that.WorkflowLibraryV37_tempParam].join(''));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37_tempParam;
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getIdofFirstDropDownField() {
    // Block#: (6HA`fN(9Sz3W(Lz8Ocd
    var item_list16 = _that.WorkflowLibraryV37__formFields;
    for(var item_index16 in item_list16) {
      item = item_list16[item_index16];
      // Block#: pl5}DXcGGD{yp*vWMxKW
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
        com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
      ) {
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
      }
    }
    return '';
  }
  /**
   * Describe this function...
   */
  function WorkflowLibraryV37__getProcessInstanceId() {
    // Block#: q=)Sb$0J9f2h/7C~Wi}#
    console.log(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__processInstId)));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.WorkflowLibraryV37__processInstId)));
      _that.debugService.printLog();
    }
    return _that.WorkflowLibraryV37__processInstId;
  }
  /**
   * Describe this function...
   */
  function BackButtonBehavior() {
    return new Promise(function(resolve, reject) {
      // Block#: 8Gc^C712cy?#*-=yDT*G
      if(!_that.buttonClicked) {
        // Block#: EA4Nv7:#7%t-L=[?)Q1X
        _that.buttonClicked = true;
        // Block#: *eCGp=G:yt@=ql};XR3o
        if(_that.currentScreen == 'SEQ5D5LSplash') {
          // Block#: wkuu,To1dG1Ae}+F@q8q
          _that.returnError = saveTaskAndNext('Previous');
        } else if(_that.currentScreen == 'SEQ5D5L') {
          // Block#: yOY7d89PG8a5GxSBSvqR
          _that.returnError = saveTaskAndNext('previous');
        } else if(_that.currentScreen == 'SEQ5D5LHealthMeasure') {
          // Block#: sCpoBE=*jb^I}N*sp)YK
          _that.returnError = saveTaskAndNext('previous');
        } else if(_that.currentScreen != 'S7MultipleText' && _that.currentScreen != 'S6MultipleChoice') {
          // Block#: (`Q6{fD%+K#37xE?-OUD
          _that.buttonClicked = false;
          // Block#: 5$LkRl9Ps2M{YzKUr{tI
          _that.tempDialogTitle = EQ5DTranslate('Quit');
          // Block#: duH))Vzc$)cret[WdBq`
          _that.tempDialogMessage = EQ5DTranslate('Do you want to quit the app?');
          // Block#: ,Q@5JUzGB4y,%91-OnjC
          _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.tempDialogTitle, _that.tempDialogMessage));
          // Block#: EsuRLDbh^J-,s;AeS0rq
          _that.tempDialogButton = EQ5DTranslate('Yes');
          // Block#: |Le~5-^]dt#Y#r{/*`g,
          com.fc.JavaScriptDistLib.Dialog.addBtn(_that.tempDialogButton, _that.dialog)
          // Block#: p;g-sCzZ%:-OZ[r@^E]G
          _that.tempDialogCancelButton = EQ5DTranslate('Cancel');
          // Block#: tmC`?},9ZPjcTt|@1Yd^
          com.fc.JavaScriptDistLib.Dialog.addCancelBtn(_that.tempDialogCancelButton, _that.dialog)
          // Block#: `X4^jg4YzN`]7-Xbz.Tc
          com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button) {
            // Block#: e_RQ;udbqmYC#+VSPj:9
            console.log(button);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(button);
              _that.debugService.printLog();
            }
            // Block#: ((jzFsTXkgv%S{ANwHZ/
            if(com.fc.JavaScriptDistLib.TextLib.textContains(button, 'Yes') ||
              com.fc.JavaScriptDistLib.TextLib.textContains(button, EQ5DTranslate('Yes'))
            ) {
              // Block#: G?IH0M0sz6?B3vp`K1hY
              com.fc.JavaScriptDistLib.Application.quitApp();
            }
          })
        } else {
          // Block#: jBSk8bbBXvlZ`K,tDxz?
          _that.buttonClicked = false;
          // Block#: 3z.Cl,r91e1JsR4zY(tr
          _that.tempDialogTitle = EQ5DTranslate('Quit');
          // Block#: q2i,#Pnl}|N|dE}q_q~F
          _that.tempDialogMessage = EQ5DTranslate('The current phase is not completed. Are you sure you want to quit the app?');
          // Block#: xoc4`RjVs$}{kep;IFcd
          _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.tempDialogTitle, _that.tempDialogMessage));
          // Block#: rF?6zJ@_MEyHWlN2V9X4
          _that.tempDialogButton = EQ5DTranslate('Yes');
          // Block#: uL-RVCEqSBTCdBDZGI_A
          _that.tempDialogCancelButton = EQ5DTranslate('Cancel');
          // Block#: MDyUL7Wa/U:|L$;]R:y#
          com.fc.JavaScriptDistLib.Dialog.addBtn(_that.tempDialogButton, _that.dialog)
          // Block#: wxr`7ufr5Vz]uHl*T0HL
          com.fc.JavaScriptDistLib.Dialog.addCancelBtn(_that.tempDialogCancelButton, _that.dialog)
          // Block#: 7WQ[,a%9{-).*]b8B^Z9
          com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button) {
            // Block#: -,5$jn3LNRpu{~sDN|I6
            console.log(button);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(button);
              _that.debugService.printLog();
            }
            // Block#: j!+yNcA]IRIV-zQ0l=b2
            if(com.fc.JavaScriptDistLib.TextLib.textContains(button, 'Yes') ||
              com.fc.JavaScriptDistLib.TextLib.textContains(button, EQ5DTranslate('Yes'))
            ) {
              // Block#: ,n(~cQ/d`!txe?]=dk3$
              com.fc.JavaScriptDistLib.Application.quitApp();
            }
          })
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function downloadTranslations() {
    return new Promise(function(resolve, reject) {
      // Block#: u)4jVXR86iB}3MpuUoe#
      com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure('forgetfulUser', '4mn3s14C!', 'forgetfulUser', "mobileApp", "https://develop.snapclinical.net:8443");
      // Block#: qC|lWzQ@l#F=V0]dku)Z
      console.log('getTranslations');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('getTranslations');
        _that.debugService.printLog();
      }
      // Block#: MT~z*{iT,ac:5X88k~`k
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/translations', "GET", JSON.stringify(),
        function(data) {
          // Block#: !*J;k_-B,hc,;B(j3,x0
          _that.translations = data;
          // Block#: U3zjwCEmpm5wz4~;FaFH
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(data));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(data));
            _that.debugService.printLog();
          }
          // Block#: ub9.P@r~^%em9Gl)i9G7
          resolve({
            name: "then",
            data: data
          });
        },
        function(error) {
          // Block#: hnv|f$]vog+=H[3/|ckA
          console.log('1error');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('1error');
            _that.debugService.printLog();
          }
          // Block#: |3je`C$Vh`Ml?NY60jru
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(error));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(error));
            _that.debugService.printLog();
          }
        });
    });
  }
  /**
   * Describe this function...
   */
  function setEQ5DCredentials(credentials) {
    return new Promise(function(resolve, reject) {
      // Block#: K8oC@ahQz:iL*`~Zk4qO
      _that.EQ5DCredentials = credentials;
    });
  }
  /**
   * Describe this function...
   */
  function startEQ5D5L() {
    return new Promise(function(resolve, reject) {
      // Block#: ;~g#34w2XHh6nkohaKml
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
      showScreen.show();
      history.pushState({
        'view': 'EQ5D5LDemoV12Screen'
      }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    });
  }
  /**
   * Describe this function...
   */
  function setEQ5DLanguageCode(langCode) {
    return new Promise(function(resolve, reject) {
      // Block#: Q=Km)%4%p3l^L~tR9O}R
      _that.currentLanguage = (com.fc.JavaScriptDistLib.TextLib.convertToText(langCode));
      // Block#: |BwoEz}l#L*D7|P3rV;3
      com.fc.JavaScriptDistLib.Storage.add('language', com.fc.JavaScriptDistLib.TextLib.convertToText(langCode))
    });
  }
  /**
   * Describe this function...
   */
  function initialize_LibScreenEQ5D5LSplash() {
    return new Promise(function(resolve, reject) {
      // Block#: #tqu)l#!zp^|z?BmcCz%
      _that.currentScreen = 'SEQ5D5LSplash';
      // Block#: 1)?KKU8sO~=83Lp(dh(V
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LSplashTitle", (EQ5DTranslate('Health Questionnaire English version for the UK'))); // Block#: *z2PtB0gbd7y)kuX-.H}
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LSplashNext", (EQ5DTranslate('Next'))); // Block#: ey89M_Z!Ggo:,IO_If5=
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LSplashPrevious", (EQ5DTranslate('Previous'))); // Block#: 4`NdbV`OkGpvRvvrNj#R
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LSplashFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation')));
    });
  }
  /**
   * Describe this function...
   */
  function getEQ5DLanguageCode() {
    return _that.currentLanguage;
  }
  /**
   * Describe this function...
   */
  function refreshLanguage() {
    return new Promise(function(resolve, reject) {
      // Block#: 3yH!tCcF?,$waGoi[FUv
      _that.tempLanguage = (com.fc.JavaScriptDistLib.Storage.getValue('language'));
      // Block#: YMnS9Q@R7v!!p_-KMvk2
      if(_that.tempLanguage != null) {
        // Block#: B[I5V@fBx!nD+EZ5-EWD
        _that.currentLanguage = _that.tempLanguage;
      } else {
        // Block#: 6}_T$8tfmw5cVZgwM*kn
        _that.currentLanguage = 'en-US';
      }
    });
  }
  /**
   * Describe this function...
   */
  function isValidString(string) {
    // Block#: S=H~0=:}uCFLMAki)?Fk
    if(com.fc.JavaScriptDistLib.TextLib.isText(string) &&
      com.fc.JavaScriptDistLib.MathLibrary.mathCompare(string.length, "GT", 0)
    ) {
      return true;
    }
    return false;
  }
  /**
   * Describe this function...
   */
  function initialize_LibScreenEQ5D5L() {
    return new Promise(function(resolve, reject) {
      // Block#: 9Tv`c~ml(Fjyiom]:$N4
      _that.hasClick = -1;
      // Block#: n;|EX,l_G`4+vl{me_:@
      _that.currentScreen = 'SEQ5D5L';
      // Block#: FPIA0h{5}a~hXD~]uMJh
      if(_that.SEQ5D5LFirstDisplay) {
        // Block#: tk_Smhatb.?s_ELPEQEh
        _that.SEQ5D5LFirstDisplay = false;
        // Block#: }3{(5E+d0e87q,DEWf0p
        SEQ5D5LUpdateScreen().then(response => {;
        });
      }
      // Imported from Lib: WorkflowLibraryV23
      // Block#: uUWGREVNIA7xR6Js-d$*
      _that.currentProperty = WorkflowLibraryV37__getFormProperty('title');
      // Imported from Lib: WorkflowLibraryV23
      // Block#: S-Xf1A0X1S}l?3(RqK@;
      if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty), 'Instructions')) {
        // Block#: pGqZRMnT!I;:az8E{!rR
        $('[obj-name="EQ5D5LListView"]').hide();
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(WorkflowLibraryV37__getFormPropertyAttribute('title', 'name')), "EQUAL", 'Activities')) {
        // Block#: DsmD01qh+HZ99YOpUVOt
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(getEQ5DLanguageCode(), "EQUAL", 'es-US')) {
          // Block#: llp.I~OK-gD?5?cLDoEU
          com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 190); // Block#: vdGZ1haDY9W#;j{$4;Xm
          com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 190) - 125));
        } else {
          // Block#: i;+7(B#bBE[3Svdx0@X!
          com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 170); // Block#: jO~NYfRth#szN+)lN?U)
          com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 170) - 125));
        }
      } else {
        // Block#: $OuA]w4pEZB(_COfzFfM
        com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 120); // Block#: ru+RTY9R(w??J={$!5f]
        com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 120) - 125)); // Block#: r[h))nPPqM}dHRGP9xVV
        $('[obj-name="EQ5D5LListView"]').show();
      }
      // Block#: i$,6;v_7o$F0~%L;WbAR
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Block#: $@*^(*}N;q!Mu]R$t]=k
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LListView');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LListView');
      on_listview_length_configured_EQ5D5LListView();
      // Block#: ~B!{,c,}x^(pER!1qYq1
      _that.userChoice = '';
      // Block#: b!B-_RO+0GPLLQIIj5iW
      $('[obj-name="CEQ5D5LOverlay"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function EQ5DLoadTranslations(translations) {
    return new Promise(function(resolve, reject) {
      // Block#: qMH5/t7VC%N;p{U:dQUN
      _that.EQ5DTranslations = translations;
    });
  }
  /**
   * Describe this function...
   */
  function EQ5DLoadLocalTranslations(localTranslations) {
    return new Promise(function(resolve, reject) {
      // Block#: .CWgK4VQoS1ZD$$BqmU5
      _that.EQ5DLocalTranslations = localTranslations;
    });
  }
  /**
   * Describe this function...
   */
  function displayPageEngine() {
    return new Promise(function(resolve, reject) {
      // Imported from Lib: WorkflowLibraryV23
      // Block#: xJ]x$E4pHy,hO?=TW;Cq
      _that.currentTemplate = WorkflowLibraryV37__getFormPropertyAttribute('templateType', 'name');
      // Block#: ?pPv$9pEX_wf2e=;~LT2
      console.log(_that.currentTemplate);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.currentTemplate);
        _that.debugService.printLog();
      }
      // Block#: @BWvyPk0tzSyP,!)JVEk
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'SEQ5D5L')) {
        // Block#: ~a1sWK.A|p-q=i[DWW5]
        _that.SEQ5D5LFirstDisplay = true;
        // Block#: )6?gZgA/t})hn-~2|_!8
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LibScreenEQ5D5L"]');
        showScreen.show();
        history.pushState({
          'view': 'LibScreenEQ5D5L'
        }, 'LibScreenEQ5D5L', 'LibScreenEQ5D5L');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'SEQ5D5LSplash')) {
        // Block#: hfh0f%~NRh2dJL{nX,An
        _that.SEQ5D5LSplashFirstDisplay = true;
        // Block#: 4@AY[t3-s/HpfQ?vuw-%
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
        showScreen.show();
        history.pushState({
          'view': 'EQ5D5LDemoV12Screen'
        }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'SEQ5D5LHealthMeasure')) {
        // Block#: B_}U,/-_|nO+zY*H/X_Q
        _that.SEQE5D5LHMFirstDisplay = true;
        // Block#: {rbvx;_OKQ[/T_4tH)KP
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LibScreenEQ5D5LHealthMeasure"]');
        showScreen.show();
        history.pushState({
          'view': 'LibScreenEQ5D5LHealthMeasure'
        }, 'LibScreenEQ5D5LHealthMeasure', 'LibScreenEQ5D5LHealthMeasure');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    });
  }
  /**
   * Describe this function...
   */
  function onEQ5D5L_completed(exitCode, nextProcess) {
    return new Promise(function(resolve, reject) {
      // Block#: W7(waI:5=|K83v[mlJ.q
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="TestScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'TestScreen'
      }, 'TestScreen', 'TestScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    });
  }
  /**
   * Describe this function...
   */
  function initialize_LibScreenEQ5D5LHealthMeasure() {
    return new Promise(function(resolve, reject) {
      // Block#: ZbZjE^4%C^N6O/,?t5K_
      if(_that.SEQE5D5LHMFirstDisplay) {
        // Block#: WczNg;bNyDpZd/6OLS`8
        _that.SEQE5D5LHMFirstDisplay = false;
      }
      // Block#: NR}X/nd=kZijzV?a5HIx
      _that.currentScreen = 'SEQ5D5LHealthMeasure';
      // Block#: 1Wa~2L)6*fp]/)76Kia6
      _that.userMeasurement = '';
      // Block#: 5^/=xRXhQMoGbcNhk#0^
      $('[obj-name= "IEQ5D5LHMScale"]').unbind('touchmove mousemove touchstart mousedown');
      $('[obj-name= "IEQ5D5LHMScale"]').bind('touchmove mousemove touchstart mousedown', on_Image_IEQ5D5LHMScale_TOUCHMOVE); // Block#: R5dqZi6}xNDz~V=Nk9qn
      $('[obj-name= "IEQ5D5LHMMarker"]').unbind('touchmove mousemove touchstart mousedown');
      $('[obj-name= "IEQ5D5LHMMarker"]').bind('touchmove mousemove touchstart mousedown', on_Image_IEQ5D5LHMMarker_TOUCHMOVE); // Block#: $Q9qmA|8BnFb{)}LMITQ
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", ''); // Block#: iMShIOE:g8.[=!}Ss?Lh
      $('[obj-name="CEQ5D5LHMOverlay"]').hide(); // Block#: #6O`Hiv.EC+!qgBPu5ar
      healthMeasureScaleOnInit().then(response => {;
      });
      // Block#: _bVSX_`s3)kKVe=b4AMY
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText", (EQ5DTranslate('Please tap on the scale to indicate how your health is TODAY.'))); // Block#: QZ_wL6:x*pN^Qos$zN${
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBox", (EQ5DTranslate('YOUR<br>HEALTH<br>TODAY'))); // Block#: y2Cq;qbt0tw.E1%_cRf^
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText2", (EQ5DTranslate('The best health you can imagine'))); // Block#: {mQ4[m]4U})vaZ7ARL!$
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText3", (EQ5DTranslate('The worst health you can imagine'))); // Imported from Lib: WorkflowLibraryV29
      // Block#: H+Wp7cB2dX[:Zx,R7SID
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMPrevious", (EQ5DTranslate(WorkflowLibraryV37__getOutcomeName('previous')))); // Imported from Lib: WorkflowLibraryV29
      // Block#: 8#=Jd2{Z@r%_aRfFY/[u
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMNext", (EQ5DTranslate(WorkflowLibraryV37__getOutcomeName('next')))); // Block#: 4-)EPxbI1QLxt!:IWhd*
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation')));
    });
  }
  /**
   * Describe this function...
   */
  function getError() {
    // Imported from Lib: WorkflowLibraryV23
    // Block#: Ca@m]`75#RcD[X)5[8qt
    _that.currentProperty = WorkflowLibraryV37__getFormProperty('error');
    return EQ5DTranslate((com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty)));
  }
  /**
   * Describe this function...
   */
  function determineNextPageToDisplay() {
    return new Promise(function(resolve, reject) {
      // To check if another task is available (true) or the current flow is at the end (false).
      // Block#: #6:hB.$%_:eHq+:[`I9p
      if(!WorkflowLibraryV37__doesExistCurrentTask()) {
        // Block#: fgRxsRQ+u+58?_i4e9zl
        com.fc.JavaScriptDistLib.Screen.displayScreenWithName('HomeScreen'); // Block#: xMBlNf^^)m9VMc[PMb1f
        onEQ5D5L_completed('EQ5D5LDemoV12 exit', _that.nextProcessAfterCompletion).then(response => {;
        });
      } else {
        // Imported from Lib: WorkflowLibraryV23
        // Block#: %YdL%Budf.:cJ1Vw`gJp
        _that.currentProperty = WorkflowLibraryV37__getProcessVariable('switchToProcess');
        // Block#: /Sjsv]%8NYawwV0InVQy
        if(!!_that.currentProperty.length) {
          // Block#: jD.uTMxIev1l%Xgl%=[2
          _that.nextProcessAfterCompletion = (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty));
        }
        // Imported from Lib: WorkflowLibraryV23
        // Block#: 6pKVOtmu}SnrOfKzJv`H
        _that.currentProperty = WorkflowLibraryV37__getProcessVariable('email');
        // Block#: Ay-#NPZ3u(q=Uj((n5=5
        if(!!_that.currentProperty.length) {
          // Block#: Z/):R)VHcy5//.U*r]#b
          _that.userID = _that.currentProperty;
          // Block#: .G.sP:LxaCk51jdU.2B*
          console.log(_that.currentProperty);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(_that.currentProperty);
            _that.debugService.printLog();
          }
        }
        // Block#: cv{*U%=B!DoH:7$;ZiA|
        _that.buttonClicked = false;
        // Block#: $`-KEx,L)pn*s(TRjC%G
        displayPageEngine().then(response => {;
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function startPI(pDefKey, FNewInstance) {
    return new Promise(function(resolve, reject) {
      // To start a new instance of the workflow or to resume the last run of it.
      // You must specify
      // - processDefinitionKey will be your Process Identifier (text)
      // - forceStartNewInstance will be set to true if you want to start
      // a new instance or to false if you need to resume an old one.
      // Block#: 0{1hJuW4|6pG4O,lW%z1
      WorkflowLibraryV37__startNewProcessInstance(pDefKey, FNewInstance).then(response => {;
        if(response.name === "success") {
          // Block#: b5|II}DQ-|7Jr+H7eL1s
          determineNextPageToDisplay().then(response => {;
          });
        }
        if(response.name === "failure") {
          // Block#: zwI2L78E-o1@G=S%BBjz
          console.log(response.data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(response.data);
            _that.debugService.printLog();
          }
          // Block#: H2giAu.9/1@l],msqX1B
          _that.pErrorData = response.data;
          // Block#: t-kQqJ5S5W@pRRK.8J!;
          _that.buttonClicked = false;
        }
      });
    });
  }
  /**
   * Describe this function...
   */
  function saveTaskAndNext(pOutcome) {
    // Block#: /_qYP*Tk9n0uIr+~Y?1c
    _that.pErrorData = '';
    // To check if another task is available (true) or the current flow is at the end (false).
    // Block#: *D3;cbKTdhPN-7x@dlLM
    if(WorkflowLibraryV37__doesExistCurrentTask()) {
      // To complete the current task and get the next one if it exists.
      // You have to specify the outcome's name (valid outcome of the current task).
      // Block#: }1.D3H8Sd*=zC$O!5]?T
      WorkflowLibraryV37__completeAndGetNextTaskById(pOutcome).then(response => {;
        if(response.name === "success") {
          // Block#: qrr#rB#GJ(ge1Z4lmzO=
          _that.buttonClicked = false;
          // Block#: uxXt/{~:6/bPm,4QS6=Q
          determineNextPageToDisplay().then(response => {;
          });
        }
        if(response.name === "failure") {
          // Block#: +=]F,per$GjYzk:V}CK!
          _that.pErrorData = response.data;
          // Block#: O[7/{IL1tcPsqA6v1O*}
          _that.error = getError();
          // Block#: ZxJP7V_!7-@7E29c-KZ(
          _that.buttonClicked = false;
        }
      });
    } else {
      // Block#: dIbh7`C|`l?`;W@CiC,0
      _that.userPassword = '';
      // Block#: 3JZ@)F8uhtSJZ0F~%5#D
      _that.nextProcessAfterCompletion = '';
      // Block#: ?@bhD7cC;[QN.q+w?AHQ
      _that.buttonClicked = false;
      // Block#: ~qkwn1xXdA?X^(cC8x6[
      com.fc.JavaScriptDistLib.Screen.displayScreenWithName('HomeScreen'); // Block#: e^ug8d/UdWa57@{%SgS!
      onEQ5D5L_completed('no task available', _that.nextProcessAfterCompletion).then(response => {;
      });
    }
    return _that.pErrorData;
  }
  /**
   * Describe this function...
   */
  function SEQ5D5LUpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Imported from Lib: WorkflowLibraryV23
      // Block#: Hj*M8-1mLIW9@fr:uTUB
      _that.currentProperty = WorkflowLibraryV37__getFormPropertyAttribute('infoText', 'name');
      // Block#: =ev[Ogj3(j/+slLkY;d(
      if(!!_that.currentProperty.length) {
        // Block#: 4}?Vf`-A:*veim#uG:]3
        $('[obj-name="LEQ5D5L"]').show(); // Block#: okPLMK1y^2mz-^w,2*+r
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5L", (EQ5DTranslate((com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty)))));
      }
      // Imported from Lib: WorkflowLibraryV29
      // Block#: .=46DKfk$#KU6y73~~b-
      if(!!WorkflowLibraryV37__getOutcomeName('previous').length) {
        // Imported from Lib: WorkflowLibraryV29
        // Block#: L7]4A8A$tvrj^Aa9#|]T
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LPrevious", (EQ5DTranslate(WorkflowLibraryV37__getOutcomeName('previous')))); // Block#: 6rr{|a84yFndj]z6[d}C
        $('[obj-name="BEQ5D5LPrevious"]').show();
      }
      // Imported from Lib: WorkflowLibraryV29
      // Block#: oMJdeAGwyqT*)Gq2O:p8
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LNext", (EQ5DTranslate(WorkflowLibraryV37__getOutcomeName('next')))); // Block#: :4j9SuVQncD8ekDwg?,;
      _that.checkBoxList = [];
      // Block#: WKBu4!dV;oK3;r$7v?4=
      _that.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: x`n9dOykH@NG@=Zv(+DR
      getRadioButtonResponses().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function getRadioButtonResponses() {
    return new Promise(function(resolve, reject) {
      // Block#: r(y^f*r`Q:),?.}opI9`
      _that.localField = WorkflowLibraryV37__getFields();
      // Block#: @d[.(+c=2$5XvBvYUdrQ
      if(!!_that.localField.length) {
        // Block#: ^1cZ=qp96t9bog{b--?c
        _that.localField = _that.localField[0];
        // Imported from Lib: WorkflowLibraryV28
        // Block#: r(_.P5U?Y*rrQy:hH}Ju
        _that.localOptions = WorkflowLibraryV37__getRadioButtons((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localField, 'id')));
        // Block#: 9Jd%W4G804$[%V4(bX/l
        var itemNo_end = _that.localOptions.length - 1;
        var itemNo_inc = 1;
        if(0 > itemNo_end) {
          itemNo_inc = -itemNo_inc;
        }
        for(itemNo = 0; itemNo_inc >= 0 ? itemNo <= itemNo_end : itemNo >= itemNo_end; itemNo += itemNo_inc) {
          // Block#: W^)ZRDIW5H;)D^e;);T,
          _that.localVar1 = _that.localOptions[itemNo];
          // Block#: rZrfAl)`CH?zE#)[/RCH
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localField, 'value'), "EQUAL", com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localVar1, 'name'))) {
            // Block#: lW?c-#6h6bkU=A).QVbb
            _that.checkBoxValue = 'TRUE';
            // Block#: t!,i=W*3#q)|(Y;Ea]4$
            _that.hasClick = itemNo;
          } else {
            // Block#: oYLY;uEawYG}?5OpzsBd
            _that.checkBoxValue = 'FALSE';
          }
          // Block#: z3O+-jjt[Bce]CpWIcXs
          _that.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name', 'value'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(itemNo)), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localVar1, 'name')), _that.checkBoxValue]);
          // Block#: VmG11+KHDErProS0)%GR
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.checkBoxList, _that.checkBoxElement)
          // Block#: owhotfzrV28j^lqj1%:,
          $('[obj-name="EQ5D5LListView"]').show();
        }
        // Block#: 9^g!p*CjPa~4ch+kYDC^
        _that.LVcells = _that.checkBoxList.length;
      } else {
        // Block#: XplzZd`*wp5gN7pIc~(V
        _that.LVcells = 0;
      }
    });
  }
  /**
   * Describe this function...
   */
  function EQ5D5LDisplayNotification() {
    return new Promise(function(resolve, reject) {
      // Block#: -h]O0a-BX1c9zRD!fJ1{
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LNotificationText", (EQ5DTranslate('Please answer the required <br>question(s)'))); // Block#: .K%6hC~4IcPv)}`/c,,d
      $('[obj-name="CEQ5D5LOverlay"]').show();
    });
  }
  /**
   * Describe this function...
   */
  function setUserMeasurement(y) {
    return new Promise(function(resolve, reject) {
      // Block#: OF+*N@yk`_960v2G[jtV
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) &&
        com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))
      ) {
        // Block#: Xq2gnkxDMs283:N9AVEd
        _that.userMeasurement = Math.round((y - com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) / (_that.EQ5D5LHeightTotal1 / 100) - 100);
      }
      // Block#: D$;,eI$Q$%K}q(^`21$e
      _that.userMeasurement = com.fc.JavaScriptDistLib.TextLib.textReplace('.0', '', com.fc.JavaScriptDistLib.TextLib.convertToText(_that.userMeasurement * -1));
      // Block#: Dy;8^chu%l$tV_vt31%h
      _that.hasMeasurement = true;
    });
  }
  /**
   * Describe this function...
   */
  function healthMeasureScaleOnInit() {
    return new Promise(function(resolve, reject) {
      // Block#: ]-_?Ov_Zu.3aEayD3Kt;
      _that.hasMeasurement = false;
      // Block#: L9{R:(r*{:F{#f|=+WVe
      _that.EQ5D5LHeightTotal1 = com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100");
      // Block#: ,^JA;z##pGLDn_Eh%[F7
      $('[obj-name="IEQ5D5LHMMarker"]').hide(); // Block#: qs_3S*r5=kBz95/$EQE|
      $('[obj-name="CEQ5D5LHMSlider"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function moveMarker(x, y) {
    return new Promise(function(resolve, reject) {
      // Block#: ,;6y]Le|adGDMEpWR_9-
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100"))) {
        // Block#: WY`R!7K(SG|o9NGCb%k(
        $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: J?$U]35ip16VcLVA8xj9
        $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: (Ud)SiR1`|SHMIIX/t-W
        com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100") - 14)); // Block#: KF4e!G5f3#]O;=.787nT
        com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100") - 3)); // Block#: ${)yHbt|`Pd8HH,p*k!|
        setUserMeasurement(com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")).then(response => {;
        });
        // Block#: 3+s$)-Zw^wKXHHXaa|ku
        updateYourHealthLabel().then(response => {;
        });
        // Block#: AI_gv1ue1wop*1YZE6l-
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", _that.userMeasurement);
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))) {
        // Block#: X-1)!8+D!q}A7WEfh2{Q
        $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: g%#y+dT5`^Rh^1)ZH}@t
        $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: KiW`Jz4J`DtE=adn{9E#
        com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - 14)); // Block#: `o`1Gjx+~h83^!}))W,V
        com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - 3)); // Block#: kK,D^2XK{Jk0g_I?CiF#
        setUserMeasurement(com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0")).then(response => {;
        });
        // Block#: 4pS]AMnTJ]zEl]l2SpmW
        updateYourHealthLabel().then(response => {;
        });
        // Block#: Ung8KV36vy]jW4pXk{{%
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", _that.userMeasurement);
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GT", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) &&
        com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LT", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))
      ) {
        // Block#: ula^Mj$xa=``2~OmMmRX
        $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: ]!3kxW3TP_Qk$hj^DYmT
        $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: G_[2o@!.;[0+dpOeKS{s
        com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (y - 14)); // Block#: 7V=4lAa^4FBu$vFJ(*1m
        com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (y - 3)); // Block#: /,@0]{w%)-9/pDIW;{*^
        setUserMeasurement(y).then(response => {;
        });
        // Block#: i]@Eshj}n]iAp9x(Na=4
        updateYourHealthLabel().then(response => {;
        });
        // Block#: (p%h]Mv*+cm7WV5v,_j}
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", _that.userMeasurement);
      }
    });
  }
  /**
   * Describe this function...
   */
  function updateYourHealthLabel() {
    return new Promise(function(resolve, reject) {
      // Block#: s?S3]YO8AD}B8!o17iOQ
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", _that.userMeasurement);
    });
  }
  /**
   * Describe this function...
   */
  function EQ5D5LHMdisplayNotification() {
    return new Promise(function(resolve, reject) {
      // Block#: |W6R/U?h0^EqOOTcYvx4
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMNotificationText", (EQ5DTranslate('Please tap on the scale to indicate<br> how your health is TODAY.'))); // Block#: `URrdY|]6(D(wIw7`2VO
      $('[obj-name="CEQ5D5LHMOverlay"]').show();
    });
  }
  /**
   * Describe this function...
   */
  function translate(text) {
    return EQ5DTranslate(text);
  }
  // Block#: 0XVdJ)+:?B]b{4Rb!P{z
  function on_SplashScreenButton_click(e) {
    try {
      // Block#: GQ]w6w9|r3|ERA6.upu7
      downloadTranslations().then(response => {;
        if(response.name === "then") {
          // Block#: _QI-Ln[Ss4$rSzmD:vKA
          EQ5DLoadTranslations(response.data).then(response => {;
          });
          // Block#: N$Z3-H+j-R-q9H9__A0[
          com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure('jessica+dp96@snapiot.com', '111111', 'jessica+dp96@snapiot.com', "mobileApp", "https://develop.snapclinical.net:8443");
          // Block#: ]po;~.f9{:$,eOy~uA.x
          com.fc.JavaScriptDistLib.Screen.displayScreenWithName('EQ5D5LDemoV12Screen');
        }
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="SplashScreenButton"]').on('click', on_SplashScreenButton_click);
  // Block#: gbOpKEp#*k,_GE6|Dk{s
  function on_BEQ5D5LSplashNext_click(e) {
    try {
      // Block#: {3*4$U2RYT(S{Wi#GiZE
      if(!_that.buttonClicked) {
        // Block#: u]_L%82PSgp7^X}.p/)k
        _that.buttonClicked = true;
        // To check if another task is available (true) or the current flow is at the end (false).
        // Block#: hH%S[Tjyn*%bS]aWp/+n
        if(WorkflowLibraryV37__doesExistCurrentTask()) {
          // Block#: Y?b}M33fn?)IWrJifu7i
          _that.returnError = saveTaskAndNext('Next');
        } else {
          // Block#: hG1i6FZv1x2jhBBb1U~G
          startPI('EQ5D5LDemoV12', false).then(response => {;
          });
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LSplashNext"]').on('click', on_BEQ5D5LSplashNext_click);
  // Block#: *s]4BO0x/:H.U[G8m!Ry
  function on_BEQ5D5LSplashPrevious_click(e) {
    try {
      // Block#: ZYM=2$5uIHjL4or5FYvY
      if(!_that.buttonClicked) {
        // Block#: k(Z):3HFL$0(t^KzZXHX
        _that.buttonClicked = true;
        // Block#: 8Nx{+4U0nZPLvti!X6^}
        _that.returnError = saveTaskAndNext('Previous');
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LSplashPrevious"]').on('click', on_BEQ5D5LSplashPrevious_click);
  // Block#: ,CCuM]Cu.dWNMsJ$Udy;
  function on_listview_cell_configured_EQ5D5LListViewCell(EQ5D5LListViewCell, number) {
    try {
      // Block#: EAbLJAqEntM6T3q+~$Gi
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LListViewCellText", (EQ5DTranslate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[number], 'name'))))); // Block#: /ZnKGTm,pmAj{edHB7MI
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.hasClick, "EQ", number)) {
        // Block#: Vfd*y;={K/sZ==dd5{A`
        $('[obj-name="IEQ5D5LListViewCellStyle"]').hide(); // Block#: qe?)l;-]vLorT0ZeZ{GS
        $('[obj-name="IEQ5D5LListViewCellClick"]').show();
      } else {
        // Block#: -z%U8BztfVC*}}+p+Pt%
        $('[obj-name="IEQ5D5LListViewCellStyle"]').show(); // Block#: =uz4Csg9q?F_-#1g/`%S
        $('[obj-name="IEQ5D5LListViewCellClick"]').hide();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('EQ5D5LListViewCell', on_listview_cell_configured_EQ5D5LListViewCell);
  // Block#: -HHQp{H8|_!FKkCvZx!Z
  function on_screen_showEQ5D5LDemoV12Screen() {
    try {
      // Block#: vZBAv6Xgr+7A*H7V6n,^
      if(_that.initialized == null) {
        // Block#: Lc@#U0eF.`+y}Xtkn?O7
        _that.initialized = true;
        // Block#: P|,7|]:3)%~Y1SJxXt@,
        initializeEQ5D5LlibV5().then(response => {;
        });
        // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: SK-kd%@5axV}yzp6on7H
        WorkflowLibraryV37__initWorkflow().then(response => {;
        });
      }
      // Block#: qR4yS[g:VHzi;5.4Hiko
      refreshLanguage().then(response => {;
      });
      // Block#: G:vMcduo`b2{z1/tUunz
      initialize_LibScreenEQ5D5LSplash().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="EQ5D5LDemoV12Screen"]').on('show', on_screen_showEQ5D5LDemoV12Screen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showEQ5D5LDemoV12Screen'] = on_screen_showEQ5D5LDemoV12Screen;
  // Block#: ]*IgyTK@jbl_Q2#}Bp_O
  function on_screen_showLibScreenEQ5D5L() {
    try {
      // Block#: ;+.[z,UI-l|=9AWML*=m
      initialize_LibScreenEQ5D5L().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="LibScreenEQ5D5L"]').on('show', on_screen_showLibScreenEQ5D5L);
  com.fc.JavaScriptDistLib.Screen.screenDict['showLibScreenEQ5D5L'] = on_screen_showLibScreenEQ5D5L;
  // Block#: iJTYqNX6Y$R9R6c5_5!+
  function on_listview_length_configured_EQ5D5LListView() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('EQ5D5LListView', _that.LVcells);
      $('[obj-name="EQ5D5LListView"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('EQ5D5LListView', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('EQ5D5LListView', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // need loop to reset all other cells to default style per each click
  // Block#: H7[#rVa+9yFK}U_%kWtY
  function on_listview_cell_clicked_EQ5D5LListViewCell(EQ5D5LListViewCell, number) {
    try {
      // Block#: j~0t=Gl1ZY0F2Kg/~@VS
      _that.hasClick = number;
      // Block#: `I2uKO]dAUoUO0@J{.C(
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LListView');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LListView');
      on_listview_length_configured_EQ5D5LListView();
      // Block#: /GSy;,Pa.QZW0oOljDsR
      _that.userChoice = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[number], 'name'));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('EQ5D5LListViewCell', on_listview_cell_clicked_EQ5D5LListViewCell);
  // Block#: e_#,RA-=s[/ZP3!t].)t
  function on_BEQ5D5LNext_click(e) {
    try {
      // Block#: +.|91RSR-{6S7(qQ8hA#
      if(!_that.buttonClicked) {
        // Block#: :IcPK:|3[h]C`8IfYtO3
        _that.buttonClicked = true;
        // Block#: H`X[gEi7AGCvP.Oj0J1Y
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.hasClick, "NEQ", -1) ||
          com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty), 'Instructions')
        ) {
          // Block#: :T}9Uc=27ag46kXCwF@K
          if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.userChoice, "EQUAL", '')) {
            // To set the value of a specific field (addressed by its id) in the current form.
            // Imported from Lib: WorkflowLibraryV23
            // Block#: PUot^n~xt}HU{F*0QXuM
            WorkflowLibraryV37__setField(com.fc.JavaScriptDistLib.TextLib.textChangeCase(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(WorkflowLibraryV37__getFormProperty('title'), 'name')), "LOWERCASE"), _that.userChoice).then(response => {;
            });
          }
          // Block#: buyi}$C!jVz:VMUfR~M_
          _that.returnError = saveTaskAndNext('next');
        } else {
          // Block#: nl%*hU9$Wo_w;/SF#s@s
          _that.buttonClicked = false;
          // Block#: !yZsMNBLJD,6dfus7g:2
          EQ5D5LDisplayNotification().then(response => {;
          });
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LNext"]').on('click', on_BEQ5D5LNext_click);
  // Block#: `N%Bz8s2Wvd`!6}haBC3
  function on_BEQ5D5LPrevious_click(e) {
    try {
      // Block#: .UgLZPrdiI/dt#$M)rM9
      if(!_that.buttonClicked) {
        // Block#: }K4nD!O*C-.0Hm%U[+6v
        _that.buttonClicked = true;
        // To check if another task is available (true) or the current flow is at the end (false).
        // Block#: NM0iZ(ZU$[]`ds6kLt5-
        if(!WorkflowLibraryV37__doesExistCurrentTask()) {
          // Block#: VcgzkDMP`:()IuY?VblB
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
          showScreen.show();
          history.pushState({
            'view': 'EQ5D5LDemoV12Screen'
          }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: *u3ju%y2-L6ZFxFH6pQ#
          _that.returnError = saveTaskAndNext('previous');
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LPrevious"]').on('click', on_BEQ5D5LPrevious_click);
  // Block#: Vf*vXlAwdt5oT5[ptp9m
  function on_BEQ5D5LNotificationOK_click(e) {
    try {
      // Block#: k?qK!ModJ-6Cc())+7YW
      $('[obj-name="CEQ5D5LOverlay"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LNotificationOK"]').on('click', on_BEQ5D5LNotificationOK_click);
  // Block#: P[XhyU)f$QzxzNw*IT+R
  function on_BEQ5D5LNotification_click(e) {
    try {
      // Block#: w2%mUfv%+(vwup1_@H#X
      $('[obj-name="CEQ5D5LOverlay"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LNotification"]').on('click', on_BEQ5D5LNotification_click);
  // Block#: `p:b+r|]tWhjtW-c{fkk
  function on_screen_showLibScreenEQ5D5LHealthMeasure() {
    try {
      // Block#: 1yHS+uwJ/a2Snlj0eyZb
      initialize_LibScreenEQ5D5LHealthMeasure().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="LibScreenEQ5D5LHealthMeasure"]').on('show', on_screen_showLibScreenEQ5D5LHealthMeasure);
  com.fc.JavaScriptDistLib.Screen.screenDict['showLibScreenEQ5D5LHealthMeasure'] = on_screen_showLibScreenEQ5D5LHealthMeasure;
  // Block#: C~,@x;q8X%;g2OKsw:kt
  function on_BEQ5D5LHMPrevious_click(e) {
    try {
      // Block#: xnbMXxor%krM+k~@q87o
      if(!_that.buttonClicked) {
        // Block#: _W0HM2Eird;.=yud=3+W
        _that.buttonClicked = true;
        // Block#: y_MCpwY#5GZsg55xAj`I
        _that.returnError = saveTaskAndNext('previous');
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LHMPrevious"]').on('click', on_BEQ5D5LHMPrevious_click);
  // Block#: TBzi^l0_~o/LFsjeRPCF
  function on_Image_IEQ5D5LHMMarker_TOUCHMOVE(e) {
    if($('[obj-name= "IEQ5D5LHMMarker"]:visible') && $('[obj-name= "IEQ5D5LHMMarker"]:visible')[0]) {
      var currentElement = $('[obj-name= "IEQ5D5LHMMarker"]');
      var currentScreen = $('.fc.Screen:visible');
      currentElement.bind('touchstart mousedown', function(event) {
        currentScreen.bind('touchmove mousemove', function(touchmove) {
          var ose = currentScreen.offset();
          var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
            x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
            y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
          // Block#: h?o+_[-[D-,,_exfk+z*
          moveMarker(x, y).then(response => {;
          });;
          touchmove.stopPropagation();
        });
        event.stopPropagation();
      });
      currentElement.bind('mouseup touchend', function(release) {
        currentScreen.off('mousemove touchmove');
        currentElement.off('mousedown touchstart');
        release.stopPropagation();
      });
    }
  };
  //Call
  on_Image_IEQ5D5LHMMarker_TOUCHMOVE();
  // Block#: {ilXlsoo0gTQbJ6l?$/,
  function on_BEQ5D5LHMNext_click(e) {
    try {
      // Block#: Asp1^ap{Eg)x{7;y]II2
      if(!_that.buttonClicked) {
        // Block#: qy-B-#N$L9$7H8Z0j7/X
        _that.buttonClicked = true;
        // Block#: ue2bzd%Sd4iw~bb_er%z
        if(_that.hasMeasurement) {
          // To set the value of a specific field (addressed by its id) in the current form.
          // Block#: ~p!s8XV0%0;PBUXwoTsh
          WorkflowLibraryV37__setField('userMeasurement', _that.userMeasurement).then(response => {;
          });
          // Block#: yuu+6@acpiu}0G/o;[{]
          _that.returnError = saveTaskAndNext('next');
        } else {
          // Block#: 6GZ]3TszbIl7`]z*rw=(
          _that.buttonClicked = false;
          // Block#: F/XrdL,^2a1ufOk#+DPV
          EQ5D5LHMdisplayNotification().then(response => {;
          });
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LHMNext"]').on('click', on_BEQ5D5LHMNext_click);
  // Block#: ~OxM|W*#~FZZUG]w*{pk
  function on_Image_IEQ5D5LHMScale_TOUCHMOVE(e) {
    if($('[obj-name= "IEQ5D5LHMScale"]:visible') && $('[obj-name= "IEQ5D5LHMScale"]:visible')[0]) {
      var currentElement = $('[obj-name= "IEQ5D5LHMScale"]');
      var currentScreen = $('.fc.Screen:visible');
      currentElement.bind('touchstart mousedown', function(event) {
        currentScreen.bind('touchmove mousemove', function(touchmove) {
          var ose = currentScreen.offset();
          var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
            x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
            y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
          // Block#: fBUf.CDMz^f{d#T-y!s_
          moveMarker(x, y).then(response => {;
          });;
          touchmove.stopPropagation();
        });
        event.stopPropagation();
      });
      currentElement.bind('mouseup touchend', function(release) {
        currentScreen.off('mousemove touchmove');
        currentElement.off('mousedown touchstart');
        release.stopPropagation();
      });
    }
  };
  //Call
  on_Image_IEQ5D5LHMScale_TOUCHMOVE();
  // Block#: Gv$.ps:EjET}le9v]4dk
  function on_BEQ5D5LHMNotification_click(e) {
    try {
      // Block#: ln$qaa[^a2}:e6GQ`Q3C
      $('[obj-name="CEQ5D5LHMOverlay"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LHMNotification"]').on('click', on_BEQ5D5LHMNotification_click);
  // Block#: 4y#P:920^xF0B.%(4y~K
  function on_BEQ5D5LHMNotificationOK_click(e) {
    try {
      // Block#: VE7IkF0[!qsM8wHX`C4s
      $('[obj-name="CEQ5D5LHMOverlay"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BEQ5D5LHMNotificationOK"]').on('click', on_BEQ5D5LHMNotificationOK_click);
  com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","lazyDeveloper":true,"authentication":"Basic Auth","frontEndKey":"mobileApp"}}');
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="TestScreen"]').show();
});
// Generated by snapp
// 483439-797505-986056-739869
