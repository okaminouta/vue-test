<template>
	<div>
		<div>create order</div>
		<form>
			<div class="form-group">
				<label for="itemTitle">Title</label>
				<input type="text" class="form-control" id="itemTitle" aria-describedby="emailHelp" v-model="item.title"
							 placeholder="Enter title">
				<small id="titleHelp" class="form-text text-muted">We'll never share your email with anyone else.
				</small>
			</div>

			<div class="form-group">
				<label for="ItemDesc">Descroption</label>
				<textarea class="form-control" id="ItemDesc" rows="3" v-model="item.description"></textarea>
			</div>

			<div class="form-group">
				<label for="itemPrice">Price</label>
				<input type="tel" class="form-control" id="itemPrice" aria-describedby="emailHelp"
							 placeholder="Enter price" v-model="item.price">
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.
				</small>
			</div>

			<!--<div class="form-group">-->
			<!--<label for="exampleInputFile">File input</label>-->
			<!--<input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">-->
			<!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the-->
			<!--above input. It's a bit lighter and easily wraps to a new line.-->
			<!--</small>-->
			<!--</div>-->


		</form>

      <div class="row">
        <div class="col-6"><div>
          <croppa v-model="myCroppa"
                  :width="300"
                  :height="200"
                  :quality="1"></croppa>
          <small id="cropperHelp" class="form-text text-muted">Use mouse to move image mouse wheel to zoom in/out
          </small>
        </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-model="item.hidden">
              Display
            </label>
          </div>
          <button @click.prevent="show" class="btn btn-primary">Show</button>
          <button @click.prevent="create" class="btn btn-primary">Submit</button></div>
        <div class="col-6"><div class="d-flex justify-content-center row">
          <div class="col-xl-6 col-lg-8 mb-3">
            <card
              v-if="showCard"
              :item="item"
              class="card"
            >
              <img :src="image" alt="">
            </card>
          </div></div></div>
      </div>
			<!--<img src="http://localhost:8081/api/image/5bb0dd0e195761240c07c799" alt="">-->

	</div>
</template>

<script>
	import Card from '@/components/Card';

	export default {
		components: {
			Card,
		},
		data() {
			return {
				myCroppa: {},
        showCard: false,
        image: "",
				item: {
					title: '',
          description: '',
					price: '0',
					image: '',
					hidden: false
				}
			}

		},

		methods: {
			uploadCroppedImage() {
				this.myCroppa.generateBlob((blob) => {
					// write code to upload the cropped image file (a file is a blob)
				}, 'image/jpeg', 0.8) // 80% compressed jpeg file
			},
      show() {
			  this.showCard = true;
        this.image = this.myCroppa.generateDataUrl('image/jpeg');
      },
			create() {

				console.log(this.item)
				let image;
				this.myCroppa.generateBlob((blob) => {
					// write code to upload the cropped image file (a file is a blob)
					this.item.image = ''
					this.$store.dispatch('products/uploadProduct', {item: Object.assign({}, this.item), cover: blob,})
				}, 'image/jpeg', 0.8) // 80% compressed jpeg file
				// this.item.image = '';

				// this.$store.commit('products/createProduct', Object.assign({}, this.item) )
			}
		},
		watch: {
			myCroppa() {
				console.log('image changed')
				this.item.image = this.myCroppa.generateDataUrl('image/jpeg')
			}
		}
	};
</script>

<style lang="scss" type="scss" scoped>
  img {
    overflow: hidden;
    height: 200px;
    width: 300px;
    min-height: 100px;
    max-width: 500px;
  }
  .card{
    max-width: 300px;
  }
</style>
