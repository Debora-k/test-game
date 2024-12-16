
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FruitShootMain extends Phaser.Scene {

	constructor() {
		super("FruitShootMain");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// blob
		const blob = this.add.image(234, 140, "blob");
		blob.scaleX = 0.5;
		blob.scaleY = 0.5;

		// blob_1
		const blob_1 = this.add.image(815, 119, "blob");
		blob_1.scaleX = 0.5;
		blob_1.scaleY = 0.5;

		// blob_2
		const blob_2 = this.add.image(573, 294, "blob");
		blob_2.scaleX = 0.5;
		blob_2.scaleY = 0.5;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(503, 541, 128, 128);
		rectangle_1.scaleX = 12.157164608261388;
		rectangle_1.scaleY = 0.9372035483811207;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 6684046;

		// dark_ground_blob
		const dark_ground_blob = this.add.image(280, 382, "blob");
		dark_ground_blob.scaleX = 0.5;
		dark_ground_blob.scaleY = 0.8079680320119923;
		dark_ground_blob.tintFill = true;
		dark_ground_blob.tintTopLeft = 2513986;
		dark_ground_blob.tintTopRight = 2513986;
		dark_ground_blob.tintBottomLeft = 2513986;
		dark_ground_blob.tintBottomRight = 2513986;

		// ground_blob
		const ground_blob = this.add.image(158, 441, "blob");
		ground_blob.scaleX = 0.5;
		ground_blob.scaleY = 0.5;
		ground_blob.tintFill = true;
		ground_blob.tintTopLeft = 6539085;
		ground_blob.tintTopRight = 6539085;
		ground_blob.tintBottomLeft = 6539085;
		ground_blob.tintBottomRight = 6539085;

		// ground_blob_1
		const ground_blob_1 = this.add.image(487, 440, "blob");
		ground_blob_1.scaleX = 0.5;
		ground_blob_1.scaleY = 0.5;
		ground_blob_1.tintFill = true;
		ground_blob_1.tintTopLeft = 6539085;
		ground_blob_1.tintTopRight = 6539085;
		ground_blob_1.tintBottomLeft = 6539085;
		ground_blob_1.tintBottomRight = 6539085;

		// dark_ground_blob_1
		const dark_ground_blob_1 = this.add.image(960, 383, "blob");
		dark_ground_blob_1.scaleX = 0.5;
		dark_ground_blob_1.scaleY = 0.8079680320119923;
		dark_ground_blob_1.tintFill = true;
		dark_ground_blob_1.tintTopLeft = 2513986;
		dark_ground_blob_1.tintTopRight = 2513986;
		dark_ground_blob_1.tintBottomLeft = 2513986;
		dark_ground_blob_1.tintBottomRight = 2513986;

		// ground_blob_2
		const ground_blob_2 = this.add.image(809, 443, "blob");
		ground_blob_2.scaleX = 0.5;
		ground_blob_2.scaleY = 0.5;
		ground_blob_2.tintFill = true;
		ground_blob_2.tintTopLeft = 6539085;
		ground_blob_2.tintTopRight = 6539085;
		ground_blob_2.tintBottomLeft = 6539085;
		ground_blob_2.tintBottomRight = 6539085;

		// ground_blob_3
		const ground_blob_3 = this.add.image(1127, 437, "blob");
		ground_blob_3.scaleX = 0.5;
		ground_blob_3.scaleY = 0.5;
		ground_blob_3.tintFill = true;
		ground_blob_3.tintTopLeft = 6539085;
		ground_blob_3.tintTopRight = 6539085;
		ground_blob_3.tintBottomLeft = 6539085;
		ground_blob_3.tintBottomRight = 6539085;

		this.blob = blob;
		this.blob_1 = blob_1;
		this.blob_2 = blob_2;

		this.events.emit("scene-awake");
	}

	private blob!: Phaser.GameObjects.Image;
	private blob_1!: Phaser.GameObjects.Image;
	private blob_2!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const clouds = [this.blob, this.blob_1, this.blob_2]

        clouds.forEach(cloud => {
            cloud.setInteractive()
            cloud.on('pointerdown', () => {
              const t = this.tweens.add({
                    targets: [cloud],
                    x: {from: cloud.x, to:cloud.x + 2000},
                    duration: 200,
                    easing: 'bounce',
                    yoyo: false,
                    paused: true
                })
              t.play()
            })
        })
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
