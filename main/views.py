from django.shortcuts import render
from django.core.mail import send_mail
from pioneers.settings import EMAIL_HOST_USER
import requests

def home(request):
	access_token = 'EAAIR4S3xgogBADVr4zUNQg3TeBKMZBTAnwHeUjHhKpHn1XgQGB6s8ybhihZBVD7I8uLZA3tVqpsJFjTTlsAJCa0VHn7bgo6ehXTqC2mGvLYSUVWC21ZBkZBh01v7ZA5I1xLNZBLflVBAUW6afrm6q5UmtSd2RE9xOmA9WzrEbpZBCxMXviEirU8H234X6p1mPpI8NQtxfJOW0ZCdpEga7Y4cZBvg39CheI1kSSVea4Cno0mqlLW68wuUsd'
	api_endpoint = "https://graph.facebook.com/v12.0/"
	page_id = "cvcpioneers"
	fb_graph_url = api_endpoint+page_id+"?fields=fan_count&access_token="+access_token
	response = requests.get(fb_graph_url)
	data = response.json()
	fb_likes = data['fan_count']
	fb_graph_url = api_endpoint+page_id+"/feed?fields=message,attachments&access_token="+access_token
	response = requests.get(fb_graph_url)
	data = response.json()
	message = data['data'][0]['message']
	if len(message) > 135:
		message = message[0:135]
		message+="..."
	post_img = data['data'][0]['attachments']['data'][0]['media']['image']['src']
	return render(request, 'index.html', {'fb_likes': fb_likes, 'latest_post': message, 'post_img': post_img})

def aboutus(request):
	return render(request, 'aboutus.html')

def getinvolved(request):
	return render(request, 'getinvolved.html')

def contact(request):
	context = {}
	if request.POST:
		email = request.POST.get('email')
		content = request.POST.get('content')
		if email and content:
			send_mail(f'{email} reached out to Pi-oneers via the contact form.', content, EMAIL_HOST_USER, ["cvcpioneers@gmail.com"])
		else:
			context['error'] = 'Please fill out all the fields.'
			return render(request, 'contact.html', context)
	return render(request, 'contact.html', context)
