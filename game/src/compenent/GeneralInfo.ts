class GeneralInfo extends eui.Component implements eui.UIComponent {
	private generalName: eui.Label
	private hp: eui.Label
	private atk: eui.Label
	private def: eui.Label
	private spa: eui.Label
	private spdf: eui.Label
	private spd: eui.Label
	private skills: eui.Label
	private level: eui.Label
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public update(info: any) {
		let conf = GeneralConfig.getInstance().getGeneralByID(info.generalID)
		if (!conf) {
			return
		}
		this.generalName.text = conf.GeneralName
		this.hp.text = (conf.Hp * 2 + info.individual.hp + info.effort.hp / 4) * (info.level) / 100 + (info.level) + 10
		this.atk.text = (conf.Atk * 2 + info.individual.attack + info.effort.attack / 4) * (info.level) / 100 + (info.level) + 10
		this.def.text = (conf.Def * 2 + info.individual.defense + info.effort.defense / 4) * (info.level) / 100 + (info.level) + 10
		this.spa.text = (conf.Satk * 2 + info.individual.spAttack + info.effort.spAttack / 4) * (info.level) / 100 + (info.level) + 10
		this.spdf.text = (conf.Sdef * 2 + info.individual.spAttack + info.effort.spAttack / 4) * (info.level) / 100 + (info.level) + 10
		this.spdf.text = (conf.Spd * 2 + info.individual.speed + info.effort.speed / 4) * (info.level) / 100 + (info.level) + 10
		this.level.text = info.level

		let skillConfMgr = SkillConfig.getInstance()
		this.skills.text = ""
		for (let i in info.skills){
			let skillConf =  skillConfMgr.getSkillByID(info.skills[i]) 
			if (skillConf){
				this.skills.text += skillConf.SkillName 
			}
		}
	}

}